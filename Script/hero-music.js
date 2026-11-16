const HeroMusic = {
  audio: null,
  hero: null,
  button: null,
  userMuted: false,     // tracks if user manually muted
  canPlay: false,       // tracks if browser allows autoplay

  init() {
    this.audio = document.getElementById('heroMusic');
    this.hero = document.getElementById('home');
    this.button = document.getElementById('musicToggle');

    if (!this.audio || !this.hero) return;

    // Set volume (0.0 to 1.0)
    this.audio.volume = 0.4;

    // Watch when hero enters/leaves viewport
    this.observeHero();

    // Wire up the mute/unmute button
    if (this.button) this.setupButton();

    // Browsers block autoplay until user interacts — wait for any click
    this.enableAutoplayAfterInteraction();
  },

  observeHero() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Hero is at least 30% visible → play
            this.fadeIn();
          } else {
            // Hero scrolled out of view → pause
            this.fadeOut();
          }
        }); this.updateButton();
      },
      {
        threshold: 0.3   // 30% of hero must be visible to trigger
      }
    );

    observer.observe(this.hero);
  },
  play() {
    if (this.userMuted) return;   // respect user's choice

    const promise = this.audio.play();
    if (promise !== undefined) {
      promise
        .then(() => {
          this.canPlay = true;
          this.updateButton();
        })
        .catch(err => {
          // Autoplay blocked — need user interaction first
          console.log('Autoplay blocked:', err.message);
        });
    }
  },

  pause() {
    this.audio.pause();
    this.updateButton();
  },
 fadeIn() {
  if (this.userMuted) return;
  this.audio.volume = 0;
  this.audio.play().catch(() => {});
  let vol = 0;
  const interval = setInterval(() => {
    vol += 0.05;
    if (vol >= 0.4) { vol = 0.4; clearInterval(interval); }
    this.audio.volume = vol;
  }, 100);  this.updateButton();
},

fadeOut() {
  let vol = this.audio.volume;
  const interval = setInterval(() => {
    vol -= 0.05;
    if (vol <= 0) {
      vol = 0;
      this.audio.pause();
      clearInterval(interval);
    }
    this.audio.volume = vol;
    this.updateButton();
  }, 100); 

   
},

  setupButton() {
    this.button.addEventListener('click', () => {
      if (this.audio.paused) {
        this.userMuted = false;
        this.fadeIn();
      } else {
        this.userMuted = true;
        this.fadeOut();
      }
    });
  },

  updateButton() {
    if (!this.button) return;
    if (this.audio.paused) {
      this.button.textContent = '🔇';
      this.button.classList.add('muted');
    } else {
      this.button.textContent = '🔊';
      this.button.classList.remove('muted');
    }
  },

  enableAutoplayAfterInteraction() {
    // Modern browsers block audio until user clicks SOMEWHERE on the page
    const unlock = () => {
      if (!this.canPlay && this.isHeroVisible()) {
        this.fadeIn();
      }
      document.removeEventListener('click', unlock);
      document.removeEventListener('touchstart', unlock);
    };
    document.addEventListener('click', unlock, { once: true });
    document.addEventListener('touchstart', unlock, { once: true });
  },

  isHeroVisible() {
    const rect = this.hero.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }
 
};

document.addEventListener('DOMContentLoaded', () => HeroMusic.init());
