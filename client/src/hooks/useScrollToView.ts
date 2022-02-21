


export function useScrollToView() {

    function handleClick(to: string) {
        const target = document.querySelector(to);

        if (!target) return;
        
        target.scrollIntoView({block: "start", behavior: "smooth"});
    }

    return {handleClick};
}