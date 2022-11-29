const servers = ['https://server.com/us/', 'https://server.com/eu/', 'https://server.com/au/'];

const getRandomPeriod = (from, to) => from + Math.random() * (to - from);

const request = url =>
  new Promise(resolve => {
    const randomDelay = getRandomPeriod(2000, 3000);
    setTimeout(() => {
      resolve({
        userData: { name: 'Tom', age: 17 },
        source: url,
      });
    }, randomDelay);
  });

// export
export const getUserASAP = userId => {
  const userUrls = servers.map(servUrl => `${servUrl}${userId}`);
  const requests = userUrls.map(userUrl => request(userUrl));

  return Promise.race(requests);
};

// getUserASAP('userID-123').then(result => console.log(result));
