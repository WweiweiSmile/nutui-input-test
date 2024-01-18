import { Button, View } from "@tarojs/components";
import { Input } from "@nutui/nutui-react-taro";
import { useState } from "react";
import './index.scss'

export default function Index() {

  const [keyword, setKeyword] = useState("");

  return <View>
    <Input value={keyword} onChange={setKeyword} />
    <Button  onClick={() => setKeyword('')}>清空</Button>
  </View>;
};
