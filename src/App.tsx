import OTPInput from "./components/OTPInput";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <h1>Enter Code:</h1>
      <OTPInput length={6}/>
    </div>
  );
}

export default App;
