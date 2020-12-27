import { getDateDaysAgo } from './date';

const fetchMediasInfo = (addMediasInfo) => {
  const CATEGORIES = [
    { name: 'A Picture of the Day', url: 'a-picture-of-the-day' },
    { name: 'Mars Rover Photos', url: 'mars-rover-photos' },
    { name: 'Earth Polychromatic Imaging Camera', url: 'earth-polychromatic-imaging-camera' }
  ]
  const apiKey = 'pTCOGdr0OJfLMQb6wfV9coKMqH3e3BZ8yOFXszLv'
  const promises = []
  const mediasInfo = []

  for (let i = 0; i < CATEGORIES.length; i += 1) {
    for (let j = 5; j > 0; j -= 1) {
      const queryDate = getDateDaysAgo(j)
      let url

      switch (CATEGORIES[i].name) {
        case 'A Picture of the Day':
          url = `https://api.nasa.gov/planetary/apod?date=${queryDate.string}&api_key=${apiKey}`
          break
        case 'Mars Rover Photos':
          url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${queryDate.string}&page=1&api_key=${apiKey}`
          break
        case 'Earth Polychromatic Imaging Camera':
          url = `https://api.nasa.gov/EPIC/api/natural/date/${queryDate.string}?api_key=${apiKey}`
          break
        default:
          break
      }

      const promise = fetch(url).then(response => response.json())
        .then(json => {
          switch (CATEGORIES[i].name) {
            case 'A Picture of the Day':
              mediasInfo.push({
                id: mediasInfo.length.toString(),
                date: queryDate,
                explanation: json.explanation,
                title: {
                  name: json.title,
                  url: json.title.replace(/ /g, '-').toLowerCase(),
                },
                url: json.url,
                category: CATEGORIES[i],
                mediaType: json.media_type
              })
            
              break
            case 'Mars Rover Photos': {
                if (json.photos.length === 0) break

                const index = Math.floor(Math.random() * json.photos.length)

                mediasInfo.push({
                  id: mediasInfo.length.toString(),
                  date: queryDate,
                  explanation: json.photos[index].camera.full_name,
                  title: {
                    name: json.photos[index].rover.name,
                    url: `${json.photos[index].rover.name.replace(/ /g, '-').toLowerCase()}-${mediasInfo.length}`,
                  },
                  url: json.photos[index].img_src,
                  category: CATEGORIES[i],
                  mediaType: 'image'
                })
              }

              break
            case 'Earth Polychromatic Imaging Camera': {
                if (json.length === 0) break

                const index = Math.floor(Math.random() * json.length)

                mediasInfo.push({
                  id: mediasInfo.length.toString(),
                  date: queryDate,
                  explanation: json.caption,
                  title: {
                    name: 'Mother Earth',
                    url: `mother-earth-${mediasInfo.length}`,
                  },
                  url: `https://epic.gsfc.nasa.gov/archive/natural/${queryDate.yearString}/${queryDate.monthString}/${queryDate.dayString}/jpg/${json[index].image}.jpg`,
                  category: CATEGORIES[i],
                  mediaType: 'image'
                })
              }

              break
            default:
              break
          }
        })
        .catch(error => console.error(error))

      promises.push(promise)
    }
  }

  Promise.all(promises).then(() => addMediasInfo(mediasInfo))
}

export default fetchMediasInfo