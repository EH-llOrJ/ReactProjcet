import React from "react";
import { Header, Nav, Body } from "../components";

const Home = () => {
  return (
    <div>
      <Header title="게시판 테스트" />
      <Nav />
      <div className="center-div-borad">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const title = e.target.title.value;
            const body = e.target.body.value;
          }}
        >
          <p>
            <input name="title" placeholder="제목" />
          </p>
          <p>
            <textarea name="body" placeholder="내용"></textarea>
          </p>
          <input type="submit" value="전송" />
        </form>
      </div>
    </div>
  );
};

export default Home;
