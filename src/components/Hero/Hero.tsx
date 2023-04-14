import "./hero.scss";

import { Container } from "../Container/Container";

export const Hero: React.FC = () => {
  return (
    <div className="hero ">
      <Container>
        <section className="hero_section ">
          <h1 className="title hero_section__title">
            Test assignment for front-end developer
          </h1>
          <p className="paragraph hero_section__paragraph">
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
          <a href="#registration" className="link">
            Sign up
          </a>
        </section>
      </Container>
    </div>
  );
};
