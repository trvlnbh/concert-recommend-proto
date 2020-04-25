import * as tf from "@tensorflow/tfjs";

class GenreModel {
    constructor() {
        this.hyper = {
            learningRate: 1,
            epochs: 3
        };

        const sgd = tf.train.sgd(this.hyper.learningRate);

        this.model = tf.sequential({ layers: [
            tf.layers.dense({ inputShape: [24], units: 1, activation: 'sigmoid' })
        ] });
        this.model.compile({ optimizer: sgd, loss: 'binaryCrossentropy' });
        
        this.updated = 0;
        this.fitQueue = []

        this.fitLoop = this.fitLoop.bind(this);
        this.fitLoop();
    }

    fit(x, y) {
        this.fitQueue.push([tf.tensor2d(x), tf.tensor2d(y), x.length]);
    }

    async fitLoop() {
        if (this.fitQueue.length) {
            const [x, y, batchSize] = this.fitQueue.shift();
            await this.model.fit(x, y, {
                batchSize,
                epochs: this.hyper.epochs
            });
            this.updated = Date.now();
        }
        setTimeout(this.fitLoop, 100);
    }

    predict(x) {
        x = Array.from(x);
        const data = this.model.predict(tf.tensor2d(x, [1, 24])).dataSync();
        return data[0];
    }
}

export default GenreModel;