import { useRouter } from "next/navigation";

export default function useNavigateTo() {
    const router = useRouter();

    return function navigateTo(path: string) {
        router.push(path);
    };
}
