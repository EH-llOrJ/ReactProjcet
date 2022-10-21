import axios from "axios";

const BoradAction = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
      }}
    ></form>
  );
};

export default BoradAction;
