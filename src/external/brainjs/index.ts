import brain from 'brain.js'

const trainMatrix = [
    { input: [0, 0, 0, 1, 0], output: [0.75] },
    { input: [1, 0, 0, 0, 0], output: [0] },
    { input: [0, 1, 0, 0, 0], output: [0.25] },
    { input: [0, 0, 0, 0, 1], output: [1] }
]
const train = [
    { input: [0.25], output: [0.25] },
    { input: [0], output: [0] },
    { input: [1], output: [1] },
    { input: [0.75], output: [0.75] }
]

const net = new brain.NeuralNetwork({ hiddenLayers: [1] })

net.train(trainMatrix, { log: true })
//net.train(train)

const predictionMatrix = net.run([0, 0, 1, 0, 0])
///const predictionMatrix = net.run([0.5])

console.log('prediction with matrix', predictionMatrix)
