/**
 * Option one
 */

// initiates the timer
const time = timer();

function timer(){
  const start = process.hrtime();

  return {
    timeEnd(){
      const [seconds,nanoseconds] = process.hrtime(start);
      return Math.round(seconds * 1e3 + nanoseconds / 1e6);
    }
  };
}

// measurement call
console.log(`${time.timeEnd()}ms`);


/**
 * Option 2 - using good old console.time & console.endtime
 * start timer with console.time('label');
 * call console.timeEnd('the relevant label');
 */

console.time('time');
console.time('time1');
for (let index = 0; index < 1e6; index++) {}

console.timeEnd('time1');
console.timeEnd('time3');