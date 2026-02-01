// hero-section

/* ======================
   GSAP REVEAL
====================== */
gsap.from('.hero-title', {
	y: 120,
	opacity: 0,
	duration: 1.4,
	ease: 'power4.out'
})

gsap.from('.hero-subtitle', {
	y: 80,
	opacity: 0,
	duration: 1.2,
	delay: 0.2,
	ease: 'power3.out'
})

gsap.from('.hero-btn', {
	y: 60,
	opacity: 0,
	duration: 1,
	delay: 0.4,
	ease: 'power3.out'
})

/* ======================
   VIDEO ONE-TIME PLAY
====================== */
const video = document.querySelector('.hero-video')

if (video) {
	video.addEventListener('ended', () => {
		video.pause()
		video.currentTime = video.duration
	})
}

/* ======================
   CURSOR FOLLOW VIDEO PARALLAX 🔥
====================== */
const hero = document.querySelector('.hero')

let mouseX = 0
let mouseY = 0
let currentX = 0
let currentY = 0

window.addEventListener('mousemove', e => {
	mouseX = (e.clientX / window.innerWidth - 0.5) * 2
	mouseY = (e.clientY / window.innerHeight - 0.5) * 2
})

function animateVideoParallax() {
	// Smooth lerp
	currentX += (mouseX - currentX) * 0.05
	currentY += (mouseY - currentY) * 0.05

	if (video) {
		video.style.transform = `
      translate(${currentX * 20}px, ${currentY * 20}px)
      scale(1.05)
    `
	}

	requestAnimationFrame(animateVideoParallax)
}

animateVideoParallax()

/* ======================
   HOVER = EXTRA DEPTH
====================== */
if (hero && video) {
	hero.addEventListener('mouseenter', () => {
		video.style.filter = 'brightness(0.5) contrast(1.3) saturate(1.5)'
	})

	hero.addEventListener('mouseleave', () => {
		video.style.filter = 'brightness(0.4) contrast(1.2) saturate(1.3)'
	})
}

/* Features Section */
gsap.registerPlugin(ScrollTrigger)

// Title reveal
gsap.to('.features-title', {
	opacity: 1,
	y: 0,
	duration: 1.2,
	ease: 'power4.out',
	scrollTrigger: {
		trigger: '.features-section',
		start: 'top 70%'
	}
})

// Cards stagger reveal
gsap.to('.feature-card', {
	opacity: 1,
	y: 0,
	duration: 1,
	stagger: 0.15,
	ease: 'power4.out',
	scrollTrigger: {
		trigger: '.features-grid',
		start: 'top 75%'
	}
})

// Cursor Parallax 3D Tilt
const tiltArea = document.getElementById('tiltArea')

document.addEventListener('mousemove', e => {
	const x = (e.clientX / window.innerWidth - 0.5) * 10
	const y = (e.clientY / window.innerHeight - 0.5) * 10

	tiltArea.style.transform = `
    rotateY(${x}deg)
    rotateX(${-y}deg)
  `
})
