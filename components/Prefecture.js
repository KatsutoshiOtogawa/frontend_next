// @ts-check
import React from "react";

// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";


/**
 * @typedef {Object} PrefData - prefectureのデータ
 * @property {number} prefCode - 県名コード
 * @property {string} prefName - 県名
 */


/**
* @typedef {Object} PrefectureJson - Prefectureのjson
 * @property {string} message - SpecialTypeの文字列プロパティ
 * @property {{prefCode: number; prefName: string;}[]} result - 県データ
 */

/**
 * @typedef {Object} Props - Prefectureのprops
 * @property {PrefectureJson} data - SpecialTypeの文字列プロパティ
 */

/**
 * @param {{data?: PrefectureJson}} props
 * 
 */
export function Prefecture({data}) {

  /** @type {PrefectureJson} */
  data = {
    message: null,
    result: [
      {
        prefCode: null,
        prefName: null
      }
    ]
  };
  /** @type { React.Dispatch<React.SetStateAction<PrefectureJson>>} */
  let setData
  [data, setData] = React.useState(data);

  React.useEffect(() => {

    async () => {
      const options = {
        method: 'GET',
        headers: { 
        },
      }
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL, options);

      if (response.status != 200) {
        console.error('fetch failed');
        console.error(await response.text())
        return;
      }
      /** @type {PrefectureJson} */
      const json = await response.json()

      setData(json);

    };
    // useEffectを一回だけ使いたいけど、eslinterのエラーが出るのでそれを消すために使う。
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (

    <>
    {
      data.result.map((value) => {
        <>
        <li>{value.prefCode}</li>
        <li>{value.prefName}</li>
        </>
      })
    }
    </>
  );
}

export async function getStaticProps(context) {

  /** @type {PrefectureJson} */
  let data;

  async () => {
    const options = {
      method: 'GET',
      headers: { 
      },
    }
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL, options);

    if (response.status != 200) {
      console.error('fetch failed');
      console.error(await response.text())
      return;
    }
    data = await response.json();
  };

  return {
    props: {
      data
    } // ページコンポーネントにpropsとして渡されます。
  };
}