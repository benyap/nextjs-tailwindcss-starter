// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: "input",
    name: "name",
    message: "What is the route to your page?",
  },
  {
    type: "select",
    name: "data",
    message: "What type of data does this page need?",
    choices: [
      "none",
      "getStaticProps",
      "getStaticProps and getStaticPaths",
      "getServerSideProps",
    ],
  },
];
