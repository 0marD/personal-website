import styled from "styled-components";

export const StyledInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
width: 100%;
    .input-wrapper {
        width: 100%;
        border-radius: 0.5rem;
        overflow: hidden;
        position: relative;
        &:focus-within {
            box-shadow: 0px 3px 10px 2px hsl(0, 0%, 100%, 0.1);
        }
    }

    .label {
        font-size: 0.9rem;
    }

    .bar {
        position: absolute;
        left: 50%;
        right: 50%;
        bottom: 0;
        height: 3px;
        background-color: hsl(17, 100%, 50%);
        transition: left 0.2s, right 0.2s;
    }

    .input {
        padding: 0.75rem 0.5rem;
        border: none;
        border-radius: 0.5rem;
        font-size: 1rem;
        outline: none;
        background-color: hsl(0, 0%, 15%);

        &::placeholder {
            color: hsl(0, 0%, 70%);
        }

        &:focus {
            background-color: hsl(0, 0%, 5%);
            color: white;

            &::placeholder {
                color: hsla(0, 0%, 60%, 0);
            }
        }

        &:focus + .bar {
            left: 0;
            right: 0;
        }
    }

    .input-error {
        font-style: italic;
        color: transparent;
        user-select: none;

        &.active {
            text-shadow: 2px 2px 10px hsl(0, 0%, 100%, 0.25);
            color: red;
        }
    }
`;
