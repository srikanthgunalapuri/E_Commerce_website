import { useCallback, useState } from "react";

function Sree() {
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
              {readOnly ? (
                <div>
                <button
                onClick={() => {
                  setReadOnly(false);
                }}
              >
                edit
              </button>
             
                <div>
                  <span>page: {page}</span>
                </div>
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
          return <div>invoice</div>;
      }
    },
    [page, readOnly]
  );
  return <div className="App">{getTile(page)}</div>;
}

export default Sree