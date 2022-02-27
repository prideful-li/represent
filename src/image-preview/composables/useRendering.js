export default function useRendering(context) {
  return (settings) => {
    if (!context.value) return

    // Used to help build flags. Should always be set to false.
    const flagBuilderMode = false

    let size, flagHeight
    const tempCanvas = document.createElement('canvas')
    if (flagBuilderMode) {
      size = settings.width
      flagHeight = settings.height

      tempCanvas.height = settings.height
      tempCanvas.width = settings.width
    } else {
      size = Math.sqrt(
        Math.pow(settings.width, 2) + Math.pow(settings.height, 2)
      )
      flagHeight = size / settings.flags.filter((flag) => flag.id !== '').length

      tempCanvas.height = size
      tempCanvas.width = size
    }

    const tempContext = tempCanvas.getContext('2d')

    settings.flags.forEach((flag, flagIndex) => {
      if (flag.id === 'bisexual') {
        const barHeight = flagHeight / 5

        tempContext.fillStyle = flag.bars[0]
        tempContext.fillRect(0, flagHeight * flagIndex, size, barHeight * 2)

        tempContext.fillStyle = flag.bars[1]
        tempContext.fillRect(
          0,
          flagHeight * flagIndex + barHeight * 2,
          size,
          barHeight
        )

        tempContext.fillStyle = flag.bars[2]
        tempContext.fillRect(
          0,
          flagHeight * flagIndex + barHeight * 3,
          size,
          barHeight * 2
        )
      } else if (flag.id === 'demisexual') {
        const barHeight = flagHeight / 6

        tempContext.fillStyle = flag.bars[1]
        tempContext.fillRect(0, flagHeight * flagIndex, size, barHeight * 2.5)

        tempContext.fillStyle = flag.bars[2]
        tempContext.fillRect(
          0,
          flagHeight * flagIndex + barHeight * 2.5,
          size,
          barHeight
        )

        tempContext.fillStyle = flag.bars[3]
        tempContext.fillRect(
          0,
          flagHeight * flagIndex + barHeight * 3.5,
          size,
          barHeight * 2.5
        )

        tempContext.fillStyle = flag.bars[0]
        tempContext.beginPath()
        tempContext.moveTo(0, flagHeight * flagIndex)
        tempContext.lineTo(
          flagHeight * 0.5,
          flagHeight * flagIndex + barHeight * 3
        )
        tempContext.lineTo(0, flagHeight * flagIndex + flagHeight)
        tempContext.fill()
      } else if (flag.id === 'intersex') {
        tempContext.fillStyle = flag.bars[0]
        tempContext.fillRect(0, flagHeight * flagIndex, size, flagHeight)

        tempContext.save()
        tempContext.strokeStyle = flag.bars[1]
        tempContext.lineWidth = flagHeight * 0.1
        tempContext.beginPath()
        tempContext.arc(
          size / 2,
          flagHeight * flagIndex + flagHeight / 2,
          flagHeight * 0.1875,
          0,
          2 * Math.PI
        )
        tempContext.closePath()
        tempContext.stroke()
        tempContext.restore()
      } else if (
        flag.id === 'intersex-progress-pride' ||
        flag.id === 'progress-pride'
      ) {
        const barHeight = flagHeight / 6

        for (let barIndex = 0; barIndex < 6; barIndex++) {
          tempContext.fillStyle = flag.bars[barIndex]
          tempContext.fillRect(
            0,
            flagHeight * flagIndex + barHeight * barIndex,
            size,
            barHeight
          )
        }

        const numberOfTriangles = flag.id === 'intersex-progress-pride' ? 6 : 5
        const triangleSize = flagHeight * 0.05
        let triangleXPositionIndex =
          flag.id === 'intersex-progress-pride' ? 3.5 : 1
        for (
          let triangleIndex = 0;
          triangleIndex < numberOfTriangles;
          triangleIndex++
        ) {
          tempContext.fillStyle = flag.bars[6 + triangleIndex]
          tempContext.beginPath()
          tempContext.moveTo(
            triangleSize * triangleXPositionIndex,
            flagHeight * flagIndex
          )
          tempContext.lineTo(
            triangleSize * triangleXPositionIndex + triangleSize,
            flagHeight * flagIndex
          )
          tempContext.lineTo(
            triangleSize * (triangleXPositionIndex + 1) + flagHeight * 0.5,
            flagHeight * flagIndex + barHeight * 3
          )
          tempContext.lineTo(
            triangleSize * (triangleXPositionIndex + 1),
            flagHeight * (flagIndex + 1)
          )
          tempContext.lineTo(
            triangleSize * triangleXPositionIndex,
            flagHeight * (flagIndex + 1)
          )
          tempContext.fill()

          triangleXPositionIndex--
        }

        if (flag.id === 'intersex-progress-pride') {
          tempContext.save()
          tempContext.strokeStyle = flag.bars[12]
          tempContext.lineWidth = flagHeight * 0.03
          tempContext.beginPath()
          tempContext.arc(
            (triangleSize * (triangleXPositionIndex + 1) + flagHeight * 0.5) /
              2,
            flagHeight * flagIndex + flagHeight / 2,
            flagHeight * 0.09375,
            0,
            2 * Math.PI
          )
          tempContext.closePath()
          tempContext.stroke()
          tempContext.restore()
        }
      } else {
        const barHeight = flagHeight / flag.bars.length
        flag.bars.forEach((bar, barIndex) => {
          tempContext.fillStyle = bar
          tempContext.fillRect(
            0,
            flagHeight * flagIndex + barHeight * barIndex,
            size,
            barHeight
          )
        })
      }
    })

    context.value.clearRect(0, 0, settings.width, settings.height)

    context.value.save()
    if (!flagBuilderMode) {
      context.value.translate(settings.width / 2, settings.height / 2)
      context.value.rotate(-Math.PI / 4)
      context.value.translate(-size / 2, -size / 2)
    }
    context.value.drawImage(tempCanvas, 0, 0)
    context.value.restore()
  }
}
