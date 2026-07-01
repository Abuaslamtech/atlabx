import { useEffect, useRef } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'framer-motion'

/**
 * Returns a ref and animation controls.
 * Attach ref to a container, spread controls into a motion element.
 * @param {object} options - { threshold, delay }
 */
const useScrollReveal = ({ threshold = 0.15, delay = 0 } = {}) => {
  const ref = useRef(null)
  const controls = useAnimation()
  const isInView = useInView(ref, { once: true, amount: threshold })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
    },
  }

  return { ref, controls, variants }
}

export default useScrollReveal
