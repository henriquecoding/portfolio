const news = document.querySelector('.news')
const progressBar = document.getElementsByClassName('progress-bar')[0]
const coverImg = document.querySelector('.main-news-cover-img')

setInterval(() => {
  const computedStyle = getComputedStyle(progressBar)
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
  progressBar.style.setProperty('--width', width + .1)
}, 5)






// function enterNews(index) {
//   const progress = progressBar[index]

//   progress.classList.add('active')
// }

// function exitNews(index, exitDelay) {
//   const progress = progressBar[index]

//     setTimeout(() => {
//       progress.classList.remove('active')
//     }, exitDelay)
  
// }

// function setupAnimationCycle({timePerNews, exitDelay}) { 
//   const cycleTime = timePerNews + exitDelay
//   let nextIndex = 0

//   function nextCycle() {

//   function currentIndex(){
//     setInterval(() => {
//       const computedStyle = getComputedStyle(progressBar)
//       const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
//       progressBar.style.setProperty('--width', width + .1)
//     }, 5)

//     if(progressBar[0] == 100) {
//       currentIndex() = nextIndex
//     }
//     }

//     enterNews(currentIndex()) 

//     setTimeout(() => exitNews(currentIndex(), exitDelay), timePerNews)

//     nextIndex = nextIndex >= news.length - 1 ? 0 : nextIndex + 1 
//   }
  
//   nextCycle()
//   setInterval(nextCycle, cycleTime)
// }

// setupAnimationCycle({
//   timePerNews: 2000,
//   exitDelay: 200 * 7 
// })
