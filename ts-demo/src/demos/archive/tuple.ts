
type DoIt = () => [ string, number, boolean ];

const doIt: DoIt = () => {

  return ['test', 1, false];

};

// const result = doIt();

const [ a, b, c ] = doIt();

