import "./App.css";
import { observer } from "mobx-react";

function App({ myCounter }) {
  return (
    <div className="container_counter_mobx">
      Bộ Đếm: {myCounter.count}
      <br />
      <br />
      Bộ Đếm Hiện Tại Có Phải Số Âm Không? <p className="yes_no">{myCounter.isNegative}</p>
      <br />
      <br />
        <button class="boton-elegante" onClick={() => myCounter.decrease()}>-</button>
        <button class="boton-elegante" id="refresh" onClick={() => myCounter.refresh()}>⟳</button> 
        <button class="boton-elegante" onClick={() => myCounter.increase()}>+</button>
    </div>
  );
}

export default observer(App);
