import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";
import BillBoard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";

export const revalidate = 0

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true }); 
    const billboard = await getBillboard("e6a218ed-732c-4585-bcb2-3b7a3d78176f");

    return ( 
        <Container>
            <div className="space-y-10 pb-10" >
                <BillBoard data={billboard} />
                {/* <div>Made changes here</div> */}
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8" >
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div> 
        </Container>
    );
}
 
export default HomePage;