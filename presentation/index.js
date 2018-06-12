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
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading
            size={1}
            fit
            caps
            lineHeight={1}
            textColor="secondary"
            fit
            bold
          >
            Building a Reusable Component Library
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
              I'm trying to build a reusable component library at that company
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            How did I end up building this reusable component library?
          </Heading>
          <List margin="50px 0 0 100px">
            <ListItem margin="20px 0 0 0">
              Someone told me that we had to build a reusable component library
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
            Now, we're building a reusable component library
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            What are the tradeoffs?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary">
            Reasons not to build a component library
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={4} textColor="tertiary">
            Your team has a low tolerance for risk
          </Heading>
          <List margin="50px 0 0 100px">
            <ListItem margin="20px 0 0 0">
              Building a component library requires a lot of upfront effort,
              with a potentially low payoff
            </ListItem>
            <ListItem margin="20px 0 0 0">
              Avoid if you have a low appetite for risk, haven't shipped an MVP
              yet, or have tight deadlines imposed on you by external
              stakeholders.
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={4} textColor="tertiary">
            Your team is new to reusability
          </Heading>
          <Text>
            If no one on your team has built an npm module or worked on an open
            source project, you might want to start smaller than an entire
            library
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={4} textColor="tertiary">
            Your team doesn't have the bandwidth to maintain it
          </Heading>
          <Text>Be honest about this one.</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={4} textColor="tertiary">
            You can't sell it to product and business folks
          </Heading>
          <Text>
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
          <Text>Less bikeshedding. More coding.</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary" caps>
            Enforce Consistency
          </Heading>
          <Text>Create a consistent experience.</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary" caps>
            Boost Performance
          </Heading>
          <Text>Reduce the size of your JavaScript bundle.</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary" caps>
            Reduce Maintenance
          </Heading>
          <Text>Reduce the size and complexity of your codebase.</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary" caps>
            Update Your Code Later
          </Heading>
          <Text>Replace your existing code component-by-component.</Text>
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
          <Image src="https://image.ibb.co/iGyj2y/charts_3_up_bold.png" />
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
            <ListItem margin="20px 0 0 0">
              How might others try to use the component?
            </ListItem>
            <ListItem margin="20px 0 0 0">
              What happens if they use your component in an unexpected way?
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary">
            API exposure
          </Heading>
          <Text textAlign="left" margin="50px 0 0 120px">
            How do you expose your component's API to its children?
          </Text>
          <Text textAlign="left" margin="50px 0 0 120px">
            What patterns are available?
          </Text>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary">
            Higher Order Component
          </Heading>
          <Image
            height="700px"
            src="https://image.ibb.co/h3WF9d/carbon_1.png"
          />
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary">
            Higher Order Component
          </Heading>
          <Image src="https://image.ibb.co/jQ4rhy/carbon_2.png" />
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary">
            Render Prop
          </Heading>
          <Link target="_blank" href="https://codesandbox.io/s/l44oo03q99">
            <Image
              height="600px"
              width="600px"
              src="https://image.ibb.co/fPYtSo/carbon.png"
            />
          </Link>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary">
            Render Prop
          </Heading>
          <Link target="_blank" href="https://codesandbox.io/s/l44oo03q99">
            <Image
              src="https://image.ibb.co/iMDsNy/carbon_3.png"
            />
          </Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="primary">
            Now for the hard part! 
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="tertiary">
            The hard part is creating a culture that facilitates discussion and growth
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="tertiary" caps>
            Documentation
          </Heading>
          <List margin="50px 0 0 100px">
            <ListItem margin="20px 0 0 0">
              Do the developers know how to write documentation?
            </ListItem>
            <ListItem margin="20px 0 0 0">
              Do they want to write documentation?
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="tertiary" caps>
            Decision-making
          </Heading>
          <Text>
            Who traditionally makes decisions on your team? 
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="tertiary" caps>
            Styling
          </Heading>
          <ListItem margin="20px 0 0 0">
            Should the components have styles? 
          </ListItem>
          <ListItem margin="20px 0 0 0">
            How should styles be implemented? How easy should they be to override?
          </ListItem>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="tertiary" caps>
            Linting
          </Heading>
          <ListItem margin="20px 0 0 0">
            What linter should you use?
          </ListItem>
          <ListItem margin="20px 0 0 0">
            Should you use Prettier?
          </ListItem>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="tertiary" caps>
            PR Process
          </Heading>
          <ListItem margin="20px 0 0 0">
            Who can merge?
          </ListItem>
          <ListItem margin="20px 0 0 0">
            What happens if the build fails?
          </ListItem>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Text size={3} textColor="tertiary">
            A reusable component library can be valuable. But don't build it
            unless you're sure it's the right decision and you're ready to sink
            a bunch of money and time into it.
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
      </Deck>
    );
  }
}
