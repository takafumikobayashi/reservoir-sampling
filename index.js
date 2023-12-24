function reservoirSampling(stream, k) {
    // Initialize the reservoir with the first k elements
    let reservoir = [];
    for (let i = 0; i < k; i++) {
        reservoir[i] = stream[i];
    }

    // Process the remaining elements in the stream
    for (let i = k; i < stream.length; i++) {
        // Randomly decide whether to replace an element in the reservoir
        let j = Math.floor(Math.random() * (i + 1));
        if (j < k) {
            reservoir[j] = stream[i];
        }
    }

    return reservoir;
}

// Example usage
const dataStream = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
const k = 5; // Number of samples to select
const sampledData = reservoirSampling(dataStream, k);
console.log("Sampled Data:", sampledData);
