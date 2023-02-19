const gallery = document.querySelectorAll('.gallery')
const headings = document.querySelectorAll('.gallery-heading--wrapper-text')

function enterScreen(index) {
  const grid = gallery[index]
  const heading = headings[index]
  const galleryColumns = grid.querySelectorAll('.gallery-column')

  grid.classList.add('active')

  galleryColumns.forEach(element => {
    element.classList.remove('animate-before', 'animate-after')
  })

  heading.classList.remove('animate-before', 'animate-after')
}

function exitScreen(index, exitDelay) {
  const grid = gallery[index]
  const heading = headings[index]
  const galleryColumns = grid.querySelectorAll('.gallery-column')

  galleryColumns.forEach(element =>{
    element.classList.add('animate-after')
  })

  heading.classList.add('animate-after')

  setTimeout(() => {
    grid.classList.remove('active')
  }, exitDelay)
}

function setupAnimationCycle({timePerScreen, exitDelay}) { 
  const cycleTime = timePerScreen + exitDelay
  let nextIndex = 0

  function nextCycle() {
    const currentIndex = nextIndex

    enterScreen(currentIndex)

    setTimeout(() => exitScreen(currentIndex, exitDelay), timePerScreen)

    nextIndex = nextIndex >= gallery.length - 1 ? 0 : nextIndex + 1 
  }
  
  nextCycle()
  setInterval(nextCycle, cycleTime)
}

setupAnimationCycle({
  timePerScreen: 3000,
  exitDelay: 200 * 7 
})