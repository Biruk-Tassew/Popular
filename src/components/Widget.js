import styled from "styled-components";

const Widget = () => {
  return (
    <WidgetWrapper>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRToftaviation%3F__cft__[0]%3DAZW8vu5VB1uFNZaRk0P6sZj7pu5ERZpG8TTwplpmWcW3gwzlzunfhpAWbQUGbQq6tF5FVj6IQmG8x41XOEJV8clEaPm2AeDXuNiSRwJVEO-szIGcuzIUy6zDyzrEpnx7NHZnR-EhtGjTNRuRJK_aZCPqEKsfcJsrx_aqs-zCeDPIWow0cqhOqzwpxC0wVxdqU3c%26__tn__%3D-UC%252CP-R&tabs=timeline&width=300&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="300"
        height="1500"
        style={{border:"none",overflow:"hidden"}}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </WidgetWrapper>
  );
};

const WidgetWrapper = styled.div``
export default Widget;
