import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Radio } from "@atrilabs/react-component-manifests/src/manifests/Radio/Radio.tsx";
import { useDiv6Cb, useDiv4Cb, useDiv8Cb, useButton2Cb, useInput2Cb, useButton4Cb, useTextBox10Cb, useImage1Cb, useTextBox3Cb, useRadio1Cb, useRadio2Cb, useRadio3Cb, useRadio4Cb, useRadio5Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Div6Props = useStore((state)=>state["Home"]["Div6"]);
const Div6IoProps = useIoStore((state)=>state["Home"]["Div6"]);
const Div6Cb = useDiv6Cb()
const Div4Props = useStore((state)=>state["Home"]["Div4"]);
const Div4IoProps = useIoStore((state)=>state["Home"]["Div4"]);
const Div4Cb = useDiv4Cb()
const Div8Props = useStore((state)=>state["Home"]["Div8"]);
const Div8IoProps = useIoStore((state)=>state["Home"]["Div8"]);
const Div8Cb = useDiv8Cb()
const Button2Props = useStore((state)=>state["Home"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["Home"]["Button2"]);
const Button2Cb = useButton2Cb()
const Input2Props = useStore((state)=>state["Home"]["Input2"]);
const Input2IoProps = useIoStore((state)=>state["Home"]["Input2"]);
const Input2Cb = useInput2Cb()
const Button4Props = useStore((state)=>state["Home"]["Button4"]);
const Button4IoProps = useIoStore((state)=>state["Home"]["Button4"]);
const Button4Cb = useButton4Cb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const Image1Props = useStore((state)=>state["Home"]["Image1"]);
const Image1IoProps = useIoStore((state)=>state["Home"]["Image1"]);
const Image1Cb = useImage1Cb()
const TextBox3Props = useStore((state)=>state["Home"]["TextBox3"]);
const TextBox3IoProps = useIoStore((state)=>state["Home"]["TextBox3"]);
const TextBox3Cb = useTextBox3Cb()
const Radio1Props = useStore((state)=>state["Home"]["Radio1"]);
const Radio1IoProps = useIoStore((state)=>state["Home"]["Radio1"]);
const Radio1Cb = useRadio1Cb()
const Radio2Props = useStore((state)=>state["Home"]["Radio2"]);
const Radio2IoProps = useIoStore((state)=>state["Home"]["Radio2"]);
const Radio2Cb = useRadio2Cb()
const Radio3Props = useStore((state)=>state["Home"]["Radio3"]);
const Radio3IoProps = useIoStore((state)=>state["Home"]["Radio3"]);
const Radio3Cb = useRadio3Cb()
const Radio4Props = useStore((state)=>state["Home"]["Radio4"]);
const Radio4IoProps = useIoStore((state)=>state["Home"]["Radio4"]);
const Radio4Cb = useRadio4Cb()
const Radio5Props = useStore((state)=>state["Home"]["Radio5"]);
const Radio5IoProps = useIoStore((state)=>state["Home"]["Radio5"]);
const Radio5Cb = useRadio5Cb()

  return (<>
  <Div className="p-Home Div4 bpt" {...Div4Props} {...Div4Cb} {...Div4IoProps}>
<TextBox className="p-Home TextBox3 bpt" {...TextBox3Props} {...TextBox3Cb} {...TextBox3IoProps}/>
</Div>
<Div className="p-Home Div6 bpt" {...Div6Props} {...Div6Cb} {...Div6IoProps}>
<Image className="p-Home Image1 bpt" {...Image1Props} {...Image1Cb} {...Image1IoProps}/>
</Div>
<Input className="p-Home Input2 bpt" {...Input2Props} {...Input2Cb} {...Input2IoProps}/>
<Button className="p-Home Button2 bpt" {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
<Button className="p-Home Button4 bpt" {...Button4Props} {...Button4Cb} {...Button4IoProps}/>
<TextBox className="p-Home TextBox10 bpt" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
<Div className="p-Home Div8 bpt" {...Div8Props} {...Div8Cb} {...Div8IoProps}>
<Radio className="p-Home Radio1 bpt" {...Radio1Props} {...Radio1Cb} {...Radio1IoProps}/>
<Radio className="p-Home Radio2 bpt" {...Radio2Props} {...Radio2Cb} {...Radio2IoProps}/>
<Radio className="p-Home Radio3 bpt" {...Radio3Props} {...Radio3Cb} {...Radio3IoProps}/>
<Radio className="p-Home Radio4 bpt" {...Radio4Props} {...Radio4Cb} {...Radio4IoProps}/>
<Radio className="p-Home Radio5 bpt" {...Radio5Props} {...Radio5Cb} {...Radio5IoProps}/>
</Div>
  </>);
}
