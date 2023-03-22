$(function() {
    const message = `
    <ul>
    <li>
        <a>名前：盛田 翔太</a>
    </li>
    <li>
        <a>e-mail：</a><a href="mailto:983055238@qq.com" style="border-bottom: solid 1px;">983055238@qq.com</a>
    </li>
    <li>
        <a>特技：中国語話せる(ネイティブレベル)</a>
    </li>
    <li>
        <a>2024年度卒業予定</a>
    </li>
    <li>
        <a>PG関係資格：MOS Excel 2019</a>
    </li>
    <li>
        <a>スキル</a>
    </li>
    <table>
        <thead>
            <tr>
                <th>使用言語</th>
                <th>熟練度</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Unity</td>
                <td>★★★★★</td>
            </tr>
            <tr>
                <td>C#</td>
                <td>★★★☆☆</td>
            </tr>
            <tr>
                <td>C++</td>
                <td>★☆☆☆☆</td>
            </tr>
            <tr>
                <td>UE4</td>
                <td>★★☆☆☆</td>
            </tr>
            <tr>
                <td>Python</td>
                <td>★★☆☆☆</td>
            </tr>
        </tbody>
    </table>
    </ul>`; // 挿入したい文字列
    $(".self-introduction").append(message); // 文字列を挿入
  });