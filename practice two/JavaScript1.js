/*Write a mock API function that wraps setTimeout in new Promise(...), simulating network latency and an occasional random failure(e.g.Math.random() < 0.2 rejects)

Call it once using.then() /.catch(), then rewrite the exact same call using async/await + try/catch — keep both versions visible to compare

Chain two dependent mock calls(e.g.fetch a "user", then use its id to fetch the user's "orders") using async/await

Use Promise.all() to fire two independent mock calls concurrently, and log / compare total time against calling them sequentially with two separate awaits*/

function api({ delay = 500, failureRate = 0.2 } = {}) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() < failureRate) {
                reject(new Error('Network request failed'));
            } else {
                resolve('1235678');
            }
        }, delay);
    });
}
// --- .then() / .catch() version ---
function loadWithThen() {
    api()
        .then(function (result) {
            console.log('[then] success:', result);
        })
        .catch(function (error) {
            console.log('[then] failed:', error.message);
        });
}

// --- async/await + try/catch version ---
async function loadWithAwait() {
    try {
        const result = await api();
        console.log('[await] success:', result);
    } catch (error) {
        console.log('[await] failed:', error.message);
    }
}

loadWithThen();
loadWithAwait();

async function dependent() {
    try{
        const proccess = await api();
        console.log('success 2.1');
        const proccesss = await api();
        console.log('success 2.2');

    }catch (error) {
        console.log('2 failed');
    }

}




async function sequential() {
    const start = Date.now();
    try {
        const a = await api();
        const b = await api();


        console.log('sequential time:', Date.now() - start, 'ms');
    } catch (error) {
        console.log('3 sequential failed');
    }
}

async function concurrent() {
    const start = Date.now();
    try {
        const [a, b] = await Promise.all([
            api(),
            api()
        ]);

        console.log('concurrent time:', Date.now() - start, 'ms');
    } catch (error) {
        console.log('3 concurrent failed');
    }
}

sequential();  
concurrent();  