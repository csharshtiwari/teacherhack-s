import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { useHistory } from "react-router-dom";
import funfacts from "./Funfacts";

const theme = {
  background: "#F4F5F6",
  fontFamily: "sans-serif",
  headerBgColor: "#15bea9",
  headerFontColor: "#fff",
  headerFontSize: "16px",
  botBubbleColor: "#65b1ff",
  botFontColor: "#fff",
  userBubbleColor: "#59dd64",
  userFontColor: "#fff",
};

const steps = [
  {
    id: "1",
    message: "Hey! I am Help-bot, how are you feeling today",
    trigger: "expressions",
  },
  {
    id: "expressions",
    options: [
      { value: "veryHappy", label: "đ", trigger: "veryHappy" },
      { value: "happy", label: "đ", trigger: "happy" },
      { value: "normal", label: "đ", trigger: "normal" },
      { value: "sad", label: "âšī¸", trigger: "sad" },
      { value: "angry", label: "đĄ", trigger: "angry" },
    ],
  },
  {
    id: "veryHappy",
    message: "Great Me too đ",
    trigger: "help",
  },
  {
    id: "happy",
    message:
      "Hmm, Looks Like You are in good mood. Well I can make it great đ",
    trigger: "help",
  },
  {
    id: "normal",
    message:
      "Ooh, Are You Confused Sir ? Don't Worry I am here to Assist You đģ",
    trigger: "help",
  },
  {
    id: "sad",
    message:
      "I am sorry to here that đ . Well i would suggest to read our random Fun-fact or Visit our Yoga Services or Read the latest feeds. You will feel better.đ",
    trigger: "help",
  },
  {
    id: "angry",
    message:
      "đ Oops, Did i do something wrong....But wait i am a bot i can't do that..đ¤Ĩ.",
    trigger: "help",
  },
  {
    id: "help",
    message: "How can I help you?",
    trigger: "options",
  },
  {
    id: "options",
    options: [
      { value: "services", label: "Services", trigger: "services" },
      {
        value: "funFact",
        label: "Give a random funfact",
        trigger: "funFact",
      },
      { value: "exit", label: "Exit", trigger: "end" },
    ],
  },
  {
    id: "services",
    message: "select one of these services",
    trigger: "selectServices",
  },
  {
    id: "selectServices",
    options: [
      { value: "ToDO", label: "ToDO", trigger: "selectedService" },
      { value: "goBack", label: "go back", trigger: "options" },
    ],
  },
  {
    id: "selectedService",
    message: "opened {previousValue}",
    trigger: "end",
  },
  {
    id: "moreHelp",
    message: "do you meed more help?",
    trigger: "moreHelp-yes",
  },
  {
    id: "moreHelp-yes",
    options: [
      { value: "yes", label: "Yes", trigger: "help" },
      { value: "no", label: "No", trigger: "end" },
    ],
  },
  {
    id: "funFact",
    component: <FunFact />,
    asMessage: true,
    trigger: "moreHelp",
  },
  {
    id: "end",
    message: "Thank you, see you again!",
    end: true,
  },
];


function FunFact() {
  const randInt = Math.floor(Math.random() * 14);
  return <div>{funfacts[randInt]}</div>;
}

function Chatbot() {
  const [opened, setOpened] = useState(false);
  const [key, setKey] = useState(Math.random());
  const history = useHistory();

  const handleEnd = ({ steps, values }) => {
    switch (values[values.length - 1]) {
      case "home":
        history.push("/");
        break;
      case "ToDO":
        history.push("/todo");
        break;
      default:
        break;
    }
    setTimeout(() => {
      setKey(Math.random());
      setOpened(false);
    }, 1000);
  };

  return (
    <div className="chatbot">
      <ThemeProvider theme={theme}>
        <ChatBot
          key={key}
          steps={steps}
          handleEnd={handleEnd}
          opened={opened}
          headerTitle="Hemp bot"
          botAvatar={"https://uploads-ssl.webflow.com/587121889ec910305c557a46/5f3f844eb1e9653ae8036e14_Bo%20neutral%20final%20.svg"}
          avatarStyle={{ borderRadius: "100%" }}
          floating={true}
          floatingIcon={
            <img
              src={"https://uploads-ssl.webflow.com/587121889ec910305c557a46/5f3f844eb1e9653ae8036e14_Bo%20neutral%20final%20.svg"}
              style={{ width: "70%" }}
              alt="chatBot icon"
            />
          }
          floatingStyle={{
            backgroundColor: "#ffffff",
            width: "60px",
            boxShadow: "2px 2px 20px -8px #111",
          }}
        />
      </ThemeProvider>
    </div>
  );
}

export default Chatbot;
