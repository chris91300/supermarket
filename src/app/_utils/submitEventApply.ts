import { Fn } from "ramda";

export default function submitEventApply(fn: Fn) {
    return (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fn();
    };
}
