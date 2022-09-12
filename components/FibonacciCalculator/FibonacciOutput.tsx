const FibonacciOutput = (props: { nValue: number }) => {
    const nthValue = props.nValue;
  
    const formula = (n: number): number => {
      if (n <= 1) {
        return n;
      }
  
      return formula(n - 1) + formula(n - 2);
    };
  
    return <p id="nth-term">{formula(nthValue)}</p>;
  };
  
  export default FibonacciOutput;
  