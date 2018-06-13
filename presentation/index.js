// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Link
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading caps textColor="secondary">
            Building a Reusable Component Library
          </Heading>
          <Text margin="10px 0 0" size={6} textColor="tertiary" fit bold>
            Tradoffs, Techniques, and Challenges
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading textSize={50} textColor="primary" caps>
            Who am I?
          </Heading>
          <Heading textSize={50} textColor="secondary">
            ...and what do I know?
          </Heading>
          <List margin="50px 0 0 100px">
            <ListItem textSize={50} margin="20px 0 0 0">
              I'm a software engineer at InRhythm (we're hiring)
            </ListItem>
            <ListItem textSize={50} margin="20px 0 0 0">
              I'm consulting at a Fortune 500 company
            </ListItem>
            <ListItem textSize={50} margin="20px 0 0 0">
              I'm trying to build a reusable component library at that company
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading textSize={80} textColor="secondary">
            How did I end up building this reusable component library?
          </Heading>
          <Text textColor="tertiary">
            Someone told me that we had to build a reusable component
            library
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote textSize={200}>No</Quote>
            <Cite>Mae Capozzi</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote textSize={200}>Yes</Quote>
            <Cite>Everyone Else</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading textSize={80} textColor="secondary" caps>
            Now, we're building a reusable component library
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading textSize={80} textColor="primary">
            What are the tradeoffs?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading textSize={80} textColor="secondary">
            Reasons not to build a component library
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading textSize={70} textColor="tertiary">
            Your team has a low tolerance for risk
          </Heading>
          <List margin="50px 0 0 100px">
            <ListItem textSize={50} margin="20px 0 0 0">
              Upfront effort === high
            </ListItem>
            <ListItem textSize={50} margin="20px 0 0 0">
              Payoff might be low
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={4} textColor="tertiary">
            Your team is new to reusability
          </Heading>
          <Text textSize={50}>Start small</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={4} textColor="tertiary">
            Your team doesn't have the bandwidth to maintain it
          </Heading>
          <Text textSize={50}>Be honest about this one.</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={4} textColor="tertiary">
            You can't sell it to product and business folks
          </Heading>
          <Text textSize={50}>
            A library on its own doesn't directly impact the bottom line.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="primary">
            Still with me? Let's talk pros!
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary" caps>
            Speed Up
          </Heading>
          <Text textSize={70}>Less bikeshedding. More coding.</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary" caps>
            Enforce Consistency
          </Heading>
          <Text textSize={70}>Create a consistent experience.</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary" caps>
            Boost Performance
          </Heading>
          <Text textSize={70}>
            Reduce the size of your JavaScript bundle.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary" caps>
            Reduce Maintenance
          </Heading>
          <Text textSize={70}>
            Reduce the size and complexity of your codebase.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary" caps>
            Update Your Code Later
          </Heading>
          <Text textSize={70}>
            Replace your existing code component-by-component.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="primary" caps>
            How do you build a reusable component?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary" caps>
            Reusability is a spectrum
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" textColor="tertiary">
          <Image height="400px" width="1000px" src="https://image.ibb.co/iGyj2y/charts_3_up_bold.png" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="tertiary" caps>
            Reusability Considerations
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary">
            What are the use cases?
          </Heading>
          <List margin="50px 0 0 100px">
            <ListItem textSize={50} margin="20px 0 0 0">
              How might others try to use the component?
            </ListItem>
            <ListItem textSize={50} margin="20px 0 0 0">
              Unexpected use?
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary">
            API exposure
          </Heading>
          <Text textSize={50} textAlign="left" margin="50px 0 0 120px">
            How do you expose your component's API to its children?
          </Text>
          <Text textSize={50} textAlign="left" margin="50px 0 0 120px">
            What patterns are available?
          </Text>
        </Slide>
        <Slide>
          <Heading textSize={80} textColor="tertiary">
            Higher Order Component
          </Heading>
        </Slide>
        <Slide>
          <Image margin="-100px 0 0 0" height="800px" width="5000px" src="https://image.ibb.co/h3WF9d/carbon_1.png" />
        </Slide>
        <Slide>
          <Image margin="-100px 0 0 0" height="500px" src="https://image.ibb.co/jQ4rhy/carbon_2.png" />
        </Slide>
        <Slide>
          <Heading textSize={80} textColor="tertiary">
            Render Prop
          </Heading>
        </Slide>
        <Slide>
          <Link target="_blank" href="https://codesandbox.io/s/l44oo03q99">
            <Image margin="-200px 0 0 0" height="1000px" src="https://image.ibb.co/fPYtSo/carbon.png" />
          </Link>
        </Slide>
        <Slide>
          <Link target="_blank" href="https://codesandbox.io/s/l44oo03q99">
          <Image margin="-100px 0 0 0" height="700px" src="https://image.ibb.co/kmwHqJ/carbon_5.png" />
          </Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="primary">
            Now for the hard part!
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading textSize={80} textColor="tertiary">
            The hard part is creating a culture that facilitates discussion and growth
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="tertiary" caps>
            Documentation
          </Heading>
          <List margin="50px 0 0 100px">
            <ListItem textSize={50} margin="20px 0 0 0">
              Do the developers know how to write documentation?
            </ListItem>
            <ListItem textSize={50} margin="20px 0 0 0">
              Do they want to write documentation?
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="tertiary" caps>
            Decision-making
          </Heading>
          <Text textSize={50}>
            Who traditionally makes decisions on your team?
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="tertiary" caps>
            Styling
          </Heading>
          <List>
          <ListItem textSize={50} margin="20px 0 0 0">
            Should the components have styles?
          </ListItem>
          <ListItem textSize={50} margin="20px 0 0 0">
            How should styles be implemented? How easy should they be to override?
          </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="tertiary" caps>
            Linting
          </Heading>
        <List>
          <ListItem textSize={50} margin="20px 0 0 0">
            What linter should you use?
          </ListItem>
          <ListItem textSize={50} margin="20px 0 0 0">
            Should you use Prettier?
          </ListItem>
        </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="tertiary" caps>
            PR Process
          </Heading>
        <List>
          <ListItem textSize={50} margin="20px 0 0 0">
            Who can merge?
          </ListItem>
          <ListItem textSize={50} margin="20px 0 0 0">
            What happens if the build fails?
          </ListItem>
        </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Text textSize={80} textColor="tertiary">
            Be sure!
          </Text>
        </Slide>
      <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
        <List>
        <ListItem textSize={50} margin="20px 0 0 0">
          Work through the tradeoffs
        </ListItem>
        <ListItem textSize={50} margin="20px 0 0 0">
          Learn about the techniques
        </ListItem>
          <ListItem textSize={50} margin="20px 0 0 0">
            Prepare for the challenges
        </ListItem>
        </List>
      </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Text margin="20px 0" textColor="secondary">
            These slides were built in React with Spectacle from Formidable Labs
          </Text>
          <Text margin="20px 0" textColor="secondary">
            Special thanks to Joe Cahill for design help and Elizabeth Ferrao for running through the talk with me!
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary">
            Contact Me
          </Heading>
          <Text margin="20px 0" textColor="secondary">
            maecapozzi@gmail.com
          </Text>
          <Text margin="20px 0" textColor="secondary">
            @MCapoz
          </Text>
          <Text margin="20px 0" textColor="secondary">
            github.com/maecapozzi
          </Text>
        </Slide>
      </Deck>;
  }
}
