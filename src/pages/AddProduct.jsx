import { useForm } from "react-hook-form";
import PeerInput from "../components/PeerInput";
import MediaInput from "../components/MediaInput";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const form = useForm();
  return (
    <div className="pl-2 pr-20">
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <Link to={"/products"}>
            <img src="/arrowLeft.svg" />
          </Link>
          <div className="text-text font-bold text-2xl">Add Product</div>
        </div>
        <div className="flex gap-2">
          <Link
            to={"/products"}
            className="bg-transparent border-[1px] border-primary rounded-lg text-primary w-24 h-8 px-4 py-2 flex items-center justify-center text-xs"
          >
            Discard
          </Link>
          <div className="bg-primary rounded-lg text-white w-24 h-8 px-4 py-2 flex items-center justify-center text-xs">
            Save
          </div>
        </div>
      </div>
      <form>
        <div className="grid grid-cols-2 gap-4 mt-4 ">
          <div className="flex flex-col gap-4">
            <div className="bg-[#F8F8F8] rounded-lg">
              <div className="mx-4 py-4">
                <div>
                  <PeerInput
                    placeholder="Product Title"
                    id="product_title"
                    type="text"
                  />
                </div>
                <div class="mt-2">
                  <PeerInput
                    placeholder="Description"
                    id="description"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#F8F8F8] rounded-lg">
              <MediaInput />
            </div>
            <div className="bg-[#F8F8F8] rounded-lg">
              <div className="mx-4 py-4">
                <div className="text-xs">Pricing</div>
                <div className="flex gap-4 mt-4">
                  <PeerInput placeholder="Price" id="price" type="number" />
                  <PeerInput
                    placeholder="Compare At Price"
                    id="compare_price"
                    type="number"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#F8F8F8] rounded-lg">
              <div className="mx-4 py-4">
                <div className="text-xs mb-4">Inventory</div>
                <PeerInput placeholder="Total Stock" id="stock" type="number" />
              </div>
            </div>
          </div>
          <div className="rounded-lg flex flex-col gap-4">
            <div className="bg-[#F8F8F8] rounded-lg">
              <div className="mx-4 py-4">
                <div className="text-xs mb-4">Add Category</div>
                <select class="bg-gray-50 border border-gray-300 text-[#8B8B8B] text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3">
                  <option selected>Category</option>
                  <option value="kitchen">Kitchen</option>
                  <option value="bath">Bath</option>
                  <option value="men">Men</option>
                  <option value="Women">Women</option>
                </select>
              </div>
            </div>

            <div className="bg-[#F8F8F8] rounded-lg">
              <div className="mx-4 py-4">
                <div className="text-xs mb-4">Options</div>
                <div className="flex flex-col gap-4">
                  <div>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      defaultValue=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded ring-0"
                    />
                    <label htmlFor="default-checkbox" className="ms-2 text-xs ">
                      Is This Product Include Size Or Colour
                    </label>
                  </div>
                  <PeerInput
                    placeholder="Total Stock"
                    id="stock_option"
                    type="number"
                  />
                  <PeerInput placeholder="Value" id="value" type="number" />
                  <div className="flex gap-2 items-center cursor-pointer">
                    <img src="/plus.svg" />
                    <div className="text-primary  text-xs">Add Another</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
