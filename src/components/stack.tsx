import { styled } from "goober";

// Component for using Flex Box easily in React as an Component
// Also it's have some abstract login around align mess in flexbox
// You don't have to think about if it's row or column you simple align stuff
// With verticalAlign or horizontalAlign 
type MainAlign = "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
type SeconderyAlign = "stretch" | "center" | "start" | "end" | "unset";

interface StackProps {
    alignContent ?: "start" | "center" | "space-between" | "space-around" | "unset";
    alignSelf ?: "stretch" | "center" | "start" | "end" | "unset";
    wrap ?: "nowrap" | "wrap" | "wrap-reverse";
}

const stack = styled("div")<StackProps>`
    display: flex;
    align-content: ${p => p.alignContent};
    align-self: ${p => p.alignSelf};
    flex-wrap: ${p => p.wrap};
`;

interface VStackProps extends StackProps {
    horizontalAlign ?: SeconderyAlign;
    verticalAlign ?: MainAlign;
}

export const VStack = styled(stack)<VStackProps>`
    flex-direction: column;
    justify-content: ${p => p.verticalAlign};
    align-items: ${p => p.horizontalAlign};
`;

interface HStackProps extends StackProps {
    horizontalAlign ?: MainAlign;
    verticalAlign ?: SeconderyAlign;
}

export const HStack = styled(stack)<HStackProps>`
    flex-direction: row;
    justify-content: ${p => p.horizontalAlign};
    align-items: ${p => p.verticalAlign};
`;
