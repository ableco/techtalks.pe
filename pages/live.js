import Navigation from "../components/navigation";
import Video from "../components/video";

import Section from "../components/ui/section";
import Wrapper from "../components/ui/wrapper";

function LivePage() {
  return (
    <Section style={{ paddingTop: 0, minHeight: "calc(100vh - 93px)" }}>
      <Navigation />
      <Wrapper>
        <div>
          <Video youtube="" />
        </div>
      </Wrapper>
      <style jsx>{`
        div {
          margin: 15vh auto;
          width: 75%;
        }
      `}</style>
    </Section>
  );
}

export default LivePage;
