import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Configuration for consistent animations
export const animationConfig = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.0,
    extraSlow: 1.5
  },
  ease: {
    smooth: "power2.out",
    bounce: "back.out(1.7)",
    elastic: "elastic.out(1, 0.5)",
    flow: "power3.out",
    gentle: "power1.inOut"
  },
  stagger: 0.1,
  distance: {
    small: 20,
    medium: 50,
    large: 100
  }
};

// Fade in from bottom animation
export const fadeInUp = (element: string | Element, options: any = {}) => {
  return gsap.fromTo(element,
    {
      opacity: 0,
      y: options.distance || animationConfig.distance.medium,
      ...options.from
    },
    {
      opacity: 1,
      y: 0,
      duration: options.duration || animationConfig.duration.normal,
      ease: options.ease || animationConfig.ease.smooth,
      delay: options.delay || 0,
      ...options.to
    }
  );
};

// Fade in from left animation
export const fadeInLeft = (element: string | Element, options: any = {}) => {
  return gsap.fromTo(element,
    {
      opacity: 0,
      x: -(options.distance || animationConfig.distance.medium),
      ...options.from
    },
    {
      opacity: 1,
      x: 0,
      duration: options.duration || animationConfig.duration.normal,
      ease: options.ease || animationConfig.ease.smooth,
      delay: options.delay || 0,
      ...options.to
    }
  );
};

// Fade in from right animation
export const fadeInRight = (element: string | Element, options: any = {}) => {
  return gsap.fromTo(element,
    {
      opacity: 0,
      x: options.distance || animationConfig.distance.medium,
      ...options.from
    },
    {
      opacity: 1,
      x: 0,
      duration: options.duration || animationConfig.duration.normal,
      ease: options.ease || animationConfig.ease.smooth,
      delay: options.delay || 0,
      ...options.to
    }
  );
};

// Scale in animation
export const scaleIn = (element: string | Element, options: any = {}) => {
  return gsap.fromTo(element,
    {
      opacity: 0,
      scale: 0,
      ...options.from
    },
    {
      opacity: 1,
      scale: 1,
      duration: options.duration || animationConfig.duration.normal,
      ease: options.ease || animationConfig.ease.bounce,
      delay: options.delay || 0,
      ...options.to
    }
  );
};

// Stagger animation for multiple elements
export const staggerAnimation = (elements: string | Element[], options: any = {}) => {
  return gsap.fromTo(elements,
    {
      opacity: 0,
      y: options.distance || animationConfig.distance.medium,
      ...options.from
    },
    {
      opacity: 1,
      y: 0,
      duration: options.duration || animationConfig.duration.normal,
      ease: options.ease || animationConfig.ease.smooth,
      stagger: options.stagger || animationConfig.stagger,
      delay: options.delay || 0,
      ...options.to
    }
  );
};

// Flow in animation (smooth curved entry)
export const flowInAnimation = (element: string | Element, options: any = {}) => {
  return gsap.fromTo(element,
    {
      opacity: 0,
      y: options.distance || animationConfig.distance.large,
      x: -(options.distance || animationConfig.distance.medium),
      rotation: -5,
      scale: 0.8,
      ...options.from
    },
    {
      opacity: 1,
      y: 0,
      x: 0,
      rotation: 0,
      scale: 1,
      duration: options.duration || animationConfig.duration.slow,
      ease: options.ease || animationConfig.ease.flow,
      delay: options.delay || 0,
      ...options.to
    }
  );
};

// Floating animation
export const floatingAnimation = (element: string | Element, options: any = {}) => {
  return gsap.to(element, {
    y: "+=10",
    duration: options.duration || 2,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1,
    ...options
  });
};

// Mouse-responsive scroll trigger animation
export const mouseResponsiveScrollTrigger = (element: string | Element, animationFn: Function, options: any = {}) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;

  ScrollTrigger.create({
    trigger: el,
    start: options.start || "top 80%",
    end: options.end || "bottom 20%",
    onEnter: () => {
      animationFn(el, { ...options, delay: 0 });
    },
    onLeave: () => {
      if (options.onLeave) {
        gsap.to(el, { opacity: 0.6, scale: 0.95, duration: 0.3 });
      }
    },
    onEnterBack: () => {
      if (options.onEnterBack) {
        gsap.to(el, { opacity: 1, scale: 1, duration: 0.3 });
      }
    },
    ...options.scrollTrigger
  });
};

// Card cascade animation
export const cardCascadeAnimation = (elements: Element[], options: any = {}) => {
  const timeline = gsap.timeline();
  
  elements.forEach((element: Element, index: number) => {
    const delay = index * (options.cascadeDelay || 0.2);
    timeline.add(flowInAnimation(element, {
      duration: options.duration || animationConfig.duration.slow,
      delay: delay,
      ease: animationConfig.ease.flow
    }), delay);
  });
  
  return timeline;
};

// Scroll trigger animation with multiple elements
export const scrollTriggerAnimation = (trigger: string | Element, animations: Array<{element: Element, animation: Function, options?: any}>, options: any = {}) => {
  ScrollTrigger.create({
    trigger: trigger,
    start: options.start || "top 80%",
    end: options.end || "bottom 20%",
    onEnter: () => {
      animations.forEach(({ element, animation, options: animOptions = {} }) => {
        animation(element, animOptions);
      });
    },
    ...options.scrollTrigger
  });
};

// Hover scale animation
export const hoverScaleAnimation = (element: string | Element, options: any = {}) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) {
    return;
  }
  
  const scale = options.scale || 1.05;
  
  el.addEventListener('mouseenter', () => {
    gsap.to(el, { scale, duration: 0.3, ease: "power2.out" });
  });
  
  el.addEventListener('mouseleave', () => {
    gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.out" });
  });
};

// Create timeline animation
export const createTimeline = (options: any = {}) => {
  return gsap.timeline(options);
};

// Parallax scroll animation
export const parallaxAnimation = (element: string | Element, options: any = {}) => {
  gsap.to(element, {
    yPercent: options.yPercent || -50,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: options.scrub !== undefined ? options.scrub : true,
      ...options.scrollTrigger
    }
  });
};

// Magnetic cursor effect for mouse interaction
export const magneticCursorEffect = (element: string | Element, options: any = {}) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;

  let bounds: DOMRect;
  const strength = options.strength || 0.3;

  const onMouseMove = (e: Event) => {
    const mouseEvent = e as MouseEvent;
    bounds = el.getBoundingClientRect();
    const relativeX = mouseEvent.clientX - bounds.left - bounds.width / 2;
    const relativeY = mouseEvent.clientY - bounds.top - bounds.height / 2;

    gsap.to(el, {
      x: relativeX * strength,
      y: relativeY * strength,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const onMouseLeave = () => {
    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)"
    });
  };

  (el as HTMLElement).addEventListener('mousemove', onMouseMove);
  (el as HTMLElement).addEventListener('mouseleave', onMouseLeave);
};