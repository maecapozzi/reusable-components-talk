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
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Reusable Components Library
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Tradoffs, Techniques, and Challenges
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Who am I?
          </Heading>
          <Heading size={4} textColor="secondary">
            ...and what do I know?
          </Heading>
          <List margin="50px 0 0 100px">
            <ListItem margin="20px 0 0 0">
              I'm a software engineer at InRhythm (we're hiring)
            </ListItem>
            <ListItem margin="20px 0 0 0">
              I'm consulting at a Fortune 500 company
            </ListItem>
            <ListItem margin="20px 0 0 0">
              I'm trying to build a reusable components library at that
              company
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            How did I end up building this reusable components library?
          </Heading>
          <List margin="50px 0 0 100px">
            <ListItem margin="20px 0 0 0">
              Someone told me that we had to build a reusable components
              library
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>No</Quote>
            <Cite>Mae Capozzi</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Yes</Quote>
            <Cite>Everyone Else</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            Now, we're building a reusable components library
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            What are the tradeoffs?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Why you should not build a component library
          </Heading>
          <List margin="50px 0 0 100px">
            <ListItem margin="20px 0 0 0">
              It's risky! Building a component library requires a lot of
              upfront effort, with a potentially low payoff
            </ListItem>
            <ListItem margin="20px 0 0 0">
              It's technically challenging if your team isn't familiar with
              building tools for other engineers
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Why you should not build a component library
          </Heading>
          <List margin="50px 0 0 100px">
            <ListItem margin="20px 0 0 0">
              You have to maintain the library, especially if other teams
              start using it.
            </ListItem>
            <ListItem margin="20px 0 0 0">
              It doesn't directly produce revenue, so it's a hard sell to
              product and business folks
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            But there are lots of reasons why you should!
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary" caps>
            Speed Up
          </Heading>
          <Text>
            Move faster by making team decisions upfront. Don't remake those decisions every time someone builds a toggle.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary" caps>
            Enforce Consistency
          </Heading>
          <Text>
            If every dev builds every component from scratch, your
            product won’t have a consistent feel.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary" caps>
            Boost Performance
          </Heading>
          <Text>
            If you build new components from scratch every time, you'll
            duplicate JavaScript and bloat your bundle. Or
            devs will import a competing library.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary" caps>
            Reduce Maintenance
          </Heading>
          <Text>
            Reusable components should reduce the overall size and
            complexity of the codebase, lowering the surface area we have to maintain.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary" caps>
            Update Your Code Later
          </Heading>
          <Text>
            When a new JavaScript framework comes out, you
            can replace your existing code component-by-component.
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
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            There are lot of things to consider when building reusable components
          </Heading>
          <List margin="50px 0 0 100px">
            <ListItem margin="20px 0 0 0">
              How might your users use this component?
            </ListItem>
            <ListItem margin="20px 0 0 0">
              What happens if they use your component in an unexpected way?
            </ListItem>
            <ListItem margin="20px 0 0 0">
              How do you expose your mini-API?
            </ListItem>
            <ListItem margin="20px 0 0 0">
              Do you understand the different types of components?
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary" caps>
            <Link target="_blank" href="https://codesandbox.io/s/l44oo03q99">
              <Image height="700px" src="https://image.ibb.co/j1qXTT/reusable_Toggle.png" />
            </Link>
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="primary" caps>
            But that's the easy part!
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="tertiary">
            The hard part is incentivizing developers to actually want to build and use these components.
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <List margin="50px 0 0 100px">
            <ListItem margin="20px 0 0 0">
              Do the developers know how to write documentation?
            </ListItem>
            <ListItem margin="20px 0 0 0">
              Do they want to write documentation?
            </ListItem>
            <ListItem margin="20px 0 0 0">
              Should the components have styles? Which styles? How should
              they implemented? How easy should they be to override?
            </ListItem>
            <ListItem margin="20px 0 0 0">
              How do you convince other teams/people to reuse your
              components?
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary">
            The point...
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Text size={3} textColor="tertiary">
            A reusable components library can be valuable. But don't build it unless you're sure it's the right decision and you're ready to sink a bunch of money and time into it.
          </Text>
        </Slide>
      </Deck>;
  }
}
