// For rotating figures:
// 1. Put the figure's contents in a div we can rotate
// 2. Let CSS rotate it

const figuresToRotate = document.querySelectorAll('.figure.rotate')

function rotate (figure) {
  // Create a new rotating div
  const rotator = document.createElement('div')
  // Create a wrapper around that
  const rotatorWrapper = document.createElement('div')
  rotatorWrapper.appendChild(rotator)
  // Add the figure as its child
  rotator.appendChild(figure.cloneNode(true))
  // Replace the figure with the rotator wrapper,
  // which contains the rotator and figure.
  figure.parentNode.replaceChild(rotatorWrapper, figure)
  // Assign classes to the rotator and rotatorWrapper
  rotator.setAttribute('class', 'figure-rotator')
  rotatorWrapper.setAttribute('class', 'figure-rotator-wrapper')

  // Copy pdf-wide classes to the wrapper.
  // This old-school approach is compatible with Prince's limited JS environment.
  const figureClasses = figure.getAttribute('class').split(' ')
  figureClasses.forEach(function (className) {
    if (className.indexOf('pdf-wide') === 0) {
      rotatorWrapper.classList.add(className)
    }
  })
}

function rotateGetFigures () {
  let i

  for (i = 0; i < figuresToRotate.length; i += 1) {
    rotate(figuresToRotate[i])
  }
}

export default function ebRotate () {
  if (figuresToRotate.length > 0) {
    console.log('Found figures to rotate.')
    rotateGetFigures()
  }
}
