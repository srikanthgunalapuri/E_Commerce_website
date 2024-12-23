import { useCallback, useState } from "react";
import "./styles.css";

export default function App() {
  const [page, setPage] = useState(1);
  const [readOnly, setReadOnly] = useState(true);
  const getTile = useCallback(
    (page) => {
      switch (page) {
        case 1:
          return (
            <div>
              order
              <button
                onClick={() => {
                  setPage(2);
                }}
              >
                add address
              </button>
            </div>
          );
        case 2:
          return (
            <div>
              address
              <button
                onClick={() => {
                  setPage(3);
                }}
              >
                go to invoice
              </button>
              <button
                onClick={() => {
                  setReadOnly(false);
                }}
              >
                edit
              </button>
              {readOnly ? (
                <div>
                  <span>page: {page}</span>
                </div>
              ) : (
                <div>
                  <input type="text" value={page} />
                  <button
                    onClick={() => {
                      setReadOnly(true);
                    }}
                  >
                    cancel
                  </button>
                </div>
              )}
            </div>
          );
        case 3:
          return <div>
             <div className="sidebar__item">
      <h4>Price</h4>
      <div className="price-range-wrap">
        <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" data-min="10" data-max="540">
          <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
          <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{left: "0%"}}></span>
          <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{left: "100%"}}></span>
          <div className="ui-slider-range ui-corner-all ui-widget-header" style={{left: "0%", width: "100%"}}></div>
        </div>
        <div className="range-slider">
          <div className="price-input">
            <input type="text" id="minamount" />
            <input type="text" id="maxamount" />
          </div>
        </div>
      </div>
    </div>
          </div>;
      }
    },
    [page, readOnly]
  );
  return <div className="App">{getTile(page)}</div>;
}