import * as HoverCard from '@radix-ui/react-hover-card';
import * as React from 'react';

const HoverIcon = ({ image, content }) => (
  <HoverCard.Root openDelay={100} closeDelay={100}>
    <HoverCard.Trigger asChild onClick={(e) => e.stopPropagation()}>
      {image}
    </HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content
        className="w-[300px] rounded-lg bg-white p-5 border-[1px] border-black shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade data-[state=open]:transition-all"
        sideOffset={5}
      >
        {content}
        <HoverCard.Arrow className="fill-white" />
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
);

export default HoverIcon;
// export default HoverCardDemo;
