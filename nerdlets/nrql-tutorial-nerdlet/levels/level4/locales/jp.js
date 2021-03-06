const translate = {
  "Level Four": {
    Title: "NRQLを極める",
    Level: "レベル４ : "
  },
  "Introduction_L4": {
    Title: "はじめに",
    Contents: {
      P1: `
        レベル4へようこそ！私たちとNRQLの学習を続けてくれてありがとうございます。
        私たちはすでに多くのことを学び、NRQLの驚異的な力を試してきました。
        あなたはすでにダッシュボードとアラートのヒーローです!
        `,
      P2: `
        このセクションでは、これまでより一歩進んだな集約方法について学んでいきます。
        より高度な数学関数や正規表現によるフィルタ、クエリでのネストの利用など、
        NRQLのさらなる可能性について学ぶことができます。それでは始めましょう！
        `
    }
  },
  "Aggregation and bucketing": {
    Title: "集約と分割の利用",
    Contents: {
      P1: `
        これは最後の集約についての学習です。標準偏差と分割方法について学んでいきましょう。
        `,
      P2: `
        標準偏差と推移
        `,
      P3: `
        標準偏差は、数値の集合内での変動や分散の量を測定するときに利用します。
        これは、低い値（平均に近い値）から高値(平均値とはかけ離れた値)にかけてのスケールを知ることができます。
        <1>stddev()</1>関数を使用すると、平均値の行間を見ることができ、どのような状況かより深いレベルで確認できます。
        この例ではのトランザクション応答時間(duration)の標準偏差について、24時間前から現在までの標準偏差を、
        前日分と比較しています。
        `,
      P4: `
        <1>stdvar()</1>関数は<4>stddev()</4>と同様に動作します。
        標準偏差ではなく標準分散(標準偏差の二乗)の値となります。
        `,
      P5: `ファセットでの分割の利用`,
      P6: `
        前回のレッスンでは、<1>FACET cases()</1>を使って、条件を用いたファセットを学習しました。
        これに加え、特定の数値属性を自動的に分割する<4>FACET buckets()</4>を利用することもできます。
        ３つの属性を指定します。
        `,
      P7: `
        <0>attribute: バケットの計算の対象となる属性</0>
        <1>ceiling: サンプル範囲の最大値。(最後のバケットが外れ値となります)</1>
        <2>number-of-buckets: バケット数</2>
        `,
      P8: `
        次のクエリでは、トランザクション全体の平均応答速度を取得しているのですが、
        データベースへのリクエスト数毎にグループ化をしようとしています。
        そこで、<1>databaseCallCount</1>を対象の属性とし、上限を400に設定しています。
        そして、10個のバケットに分割すので、次のようなバケットに均等に分割して応答速度を確認できます。
        0-40、40-80、80-120、120-160、160-200、200-240、240-280、280-320、320-360そして&gt;360
        `,
      P9: `授業のまとめ`,
      P10: `
        これで、NRQLで現在使える全ての集約関数を学ぶことができました! 
        自由自在にデータを操ることができるようになったあなたはすでにNRQLのプロです。
        もしあなたの使いたい集約関数がない場合、アカウントチームにお知らせください。
        私たちは常に皆様が必要とする次のキラー機能を探しています！！
      `
    }
  },
  "Advanced maths": {
    Title: "高度な算術",
    Contents: {
      P1: `
        NRQLは、データを細かく処理する必要がある場合に、以下のような高度な数学関数もサポートしています。
        これらの関数は、値をXの累乗に外挿したり、平方根を見つけたり、クランプを適用して上限と下限を設定したり、
        Y軸を正の値のみにすることができます。
        `,
      P2: `絶対値と整数の丸め`,
      P3: `
        NRQLには、値を操作する数学関数がたくさんあります。いくつかの関数を一緒に見ていきましょう。
        `,
      P4: `
        <1>abs(n)</1>関数はnの絶対値を返します。負でない n の値は n を返し、負の n の値は 正に変換したnの値を返します。
        例えば、<3>abs(2) = 2</3>となり、<6>abs(-4) = 4</6>となります。応答速度は常に正なのですが、
        簡単に利用できるので試してみましょう。
        `,
      P5: `
        また、<1>floor()</1>, <3>ceil()</3>, <5>round()</5>。<7>floor()</7>を使用して10進数を整数に丸めることもできます。
        <10>ceil()</10>は少数点以下を切り捨てし、<13>round()</13> は四捨五入、します。
        `,
      P6: `データのクランピング`,
      P7: `
        クランプを使用すると、値の上限または下限を指定できます。
        これは、極端な外れ値を補正する場合に有効で、時系列グラフのスケールを歪めないようにできます。
        <2>clamp_max(duration, 10)</2>は応答速度を返すのですが、10を超える場合は10となります。
        逆に、<4>clamp_min(duration,1)</4>を使うと、1を下回る場合は１となります。
        `,
      P8: `冪乗、平方根、指数、対数`,
      P9: `
        さて、次は上級者向けの数学です。また一つのクエリで同時に試してみましょう。
        `,
      P10: `
        <1>pow()</1>関数は、第1引数を第二引数で指定した値で累乗しています。
        この例では、応答速度の２乗となります。値の平方根が必要な場合は、<3>sqrt()</3>を使用します。
        また、<6>exp()</6>関数は、その引数の自然指数関数を計算します。
        `,
      P11: `最後は、対数の関数です。`,
      P12: `
        <1>ln(n)</1> 自然対数を計算します: 対数基底 e
        <2>log2(n)</2> 対数基底2を計算します
        <3>log10(n)</3> 対数基底10を計算します
        <4>log(n, b)</4> 任意の対数基底bで対数を計算します
      `,
      P13: `授業のまとめ`,
      P14: `
        今回のレッスンでは、まずデータの丸め方について学びました。
        <2>round()</2>/<4>ceil()</4>/<6>floor()</6>など、ご要望に合った方法で丸めることができます。
        クランプすることでデータの上限下限を制限できるようになりました。
        そして、冪乗、平方根、指数、対数という高度な数学関数を利用した、データの操作や
        プロットをできるようになりました。
        `
    }
  },
  "Discover events and attributes": {
    Title: "イベントと属性の検索",
    Contents: {
      P1: `
        イベントと属性を検索できるようになると、クエリを自動生成できるようになります。
        この強力なユーティリティを学んでみましょう！
        `,
      P2: `イベントタイプのリスト取得`,
      P3: `
        今現在、あなたのNew Relicアカウントで収集できているイベントの種類のリストが欲しいとします。
        <1>SHOW EVENT TYPES</1>を使うと指定した時間帯で収集できている全てのイベントタイプ
        のリストを取得することができます。
        このクエリは一つの例外で、<3>SELECT</3> および <5>FROM</5>は不要です。
        例えばカスタムイベントが存在しているかどうかの確認に利用できます.
        `,
      P4: `属性のリスト`,
      P5: `
        カスタム属性がイベントに付与されているかどうかを確認するときは、
        <1>keyset()</1>関数を使います。属性は、属性タイプごとにグループ化されています。
        指定した時間帯で問題なくカスタム属性が付与されているかを把握できます。
        `,
      P6: `授業のまとめ`,
      P7: `
        これの機能を使えば、イベントタイプや属性の変化に気づくことができます。
        DevOpsエンジニアはこれらの機能性を利用してジョブを作成したり、
        迅速に自動化したりすることができるようになるでしょう。
        `
    }
  },
  "Filter with regex": {
    Title: "正規表現によるフィルタ",
    Contents: {
      P1: `
        <1>LIKE</1>よりも複雑なパターンでデータをフィルタリングしたい場合もあると思います。
        <4>RLIKE</4>句を使うと、正規表現を使ったより複雑なマッチングを使ってフィルタリングできます。
        `,
      P2: `
        どのようなシナリオでも <1>LIKE</1> を使用することができますが、
        <3>RLIKE</3>も利用できます。この例では、偶数もしくは子音で終わるすべてのホスト名をリストアップします。
        `,
      P3: `
        単純なマッチングもできます。次の例は特定の頭文字から始まるname属性を持つデータのみ検索します。
        `,
      P4: `
        正規表現エンジンは<2>RE2構文</2>を使用します。
        文字をエスケープする必要がある場合は、ダブルバックスラッシュでエスケープします。e.g. <5>\\\\*</5>
        `,
      P5: `
        <1>RLIKE</1>は複雑で<3>LIKE</3>よりもパフォーマンスが高くないことに注意してください。
        <7>LIKE</7>や他のフィルタ機能がニーズに合っていない時の利用に留めましょう。
        `,
      P6: `授業のまとめ`,
      P7: `
        正規表現のサポートにより、ほぼ無限に近いパターンマッチングが可能となりました。
        あなたがすでに Regex の達人であれば、NRQLにどれだけのパワーが追加されたかご理解いただけるでしょう。
        そうでない人もご安心ください。正規表現を学ぶためのリソースはオンライン上に山ほどあります！
        `
    }
  },
  "Nested aggregation": {
    Title: "クエリでのネストの利用",
    Contents: {
      P1: `
        NRQLは、一般的なSQLで利用できる結合をサポートしていません。
        しかし、クエリ内でネストを利用できます。SQLのサブクエリに似ているものです。
        サブクエリは、次のようなシーンでご活用いただけます。
        `,
      P2: `
        <0>過去一時間の間の分間当たりのリクエスト量が最大となった時の値</0>
        <1>全てのサーバーのCPU使用量平均はどれくらいで、CPU使用量90%以上となっているのがどのサーバーか</1>
        <2>すべてのユーザーセッションのうち、すぐに離脱したユーザーの割合(≒セッション内でPageViewが１つの割合)？</2>
        `,
      P3: `
        これらのユースケースをそれぞれ詳しく見てみましょう。
        `,
      P4: `例1 - 最後の1時間の最大分間リクエスト量`,
      P5: `
        まず、過去1時間の1分あたりの取引数をカウントします。
        ここでは目新しいことは何もありません。この例では、グラフ上に60個のデータポイントを返します。
        `,
      P6: `
        さて、ここで取得できたデータポイントの最大値を見つけるために、
        <1>SELECT ... FROM</1>を使って次のようにします。
        <3>SELECT z FROM (SELECT x FROM y)</3>
        `,
      P7: `例2 - CPU負荷の高いサーバー`,
      P8: `
        この例では、New Relic Infrastructure のデータを使用しています。例えば、
        CPUが平均的に一定の値を上回っているホストがあるかどうか確認したいことがあるのではないでしょうか。
        <3>average(cpuPercent)</3>を求めると、平均CPU使用率の高いホストのリストを取得できます。
        しかし、単純に<5> WHERE cpuPercent > </5>を追加してしまうと、現在CPU使用率90%以上で動作している
        ホストのみが対象対象となってしまいます。
        `,
      P9: `
        欲しいリストを取得するためには、クエリでネストを利用しましょう! 
        <2>average(cpuPercent)</2>をサブクエリとして利用すると、以下のように
        ホストとその平均CPUを指定します。ここで、外側のクエリでは、次のようにフィルタリングすることができます。
        外側のクエリですることは、> x%を追加するだけです！！
        <7>(ヒント: クエリを利用する際には、閾値を調整してください。この例では 20% に設定しています)。</7>
        `,
      P10: `例3 - ユーザーの直帰`,
      P11: `
        フロントエンドのモニタリングで直帰率の計算方法をよく聞かれます。
        これは、1つのページのみだけを閲覧し他のページにいく前にサイトから離れてしまうセッションのことを指します。
        クエリでネストを利用すると、次のことができるようになります。
        内部クエリではPageViewsイベントについて、セッションごとにグループ化しをイベント数をカウントします。
        結果セットは、すべてのセッションとそれぞれのセッションでどのくらいページを閲覧したかとなります。
        次に外側のクエリではカウントが1であるセッションの割合を計算します。
        `,
      P12: `授業のまとめ`,
      P13: `
        お疲れ様でした！このコースでカバーしている、NRQLの素晴らしい機能をすべて学ぶことができました。
        あなたはすでに、真のNRQLの魔法使いです!
        `,
      P14: `
        さらに質問や問題が発生した場合は、以下までお気軽にお問い合わせください。
        New Relic のサポートに連絡するにはこちら、
        `,
      P15: `
        また、オンラインコミュニティではあなたの利用例を共有していただくことも歓迎しています！
        `
    }
  }
};
export default translate;
