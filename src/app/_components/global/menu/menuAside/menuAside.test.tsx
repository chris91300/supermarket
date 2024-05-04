import { render, screen, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MenuAside from "./MenuAside";
import data from '../../../../_bdd/data.json';
import getDataForMenu from "../../../../_bdd/utils/getDataForMenu";
import { map } from "ramda";

const menuList = getDataForMenu(data);

afterEach(cleanup);

describe("TEST OF MENUASIDE COMPONENT", () => {
    it("should render all primary categories", () => {
        render(<MenuAside />)

        map((category)=>{
            const { menu } = category;
            const button = screen.getByRole("button", {name: menu})
            expect(button).toBeInTheDocument();
        }, menuList)
        
    })

    it("should render all secondary categories", async () => {
        const user = userEvent.setup();
        render(<MenuAside />)

        let totalLinksElement = 0;
       
        await Promise.all(menuList.map(async (category)=>{
           
            const { menu, subMenu } = category;
            totalLinksElement += subMenu.length;
            const button = screen.getByRole("button", {name: menu})           
            
            await user.click(button);
            
            const links = screen.getAllByRole("link");
            expect(links).toHaveLength(totalLinksElement);


        }))
       

       
        
    })
})