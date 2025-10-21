// 質問テンプレート - 暗黙知を引き出すための質問パターン
const questionTemplates = {
    workflow: {
        title: "業務フロー・手順に関する質問",
        questions: [
            "この業務の全体的な流れを、始まりから終わりまで教えていただけますか？",
            "日々の業務で、最初に行うことは何ですか？その判断はどのように行っていますか？",
            "業務の中で、最も時間がかかる工程はどれですか？その理由は何でしょうか？",
            "業務の手順で、他の人には分かりにくいと思われる部分はありますか？",
            "この業務を行う上で、必ず確認しているポイントは何ですか？",
            "業務の途中で、待ち時間や中断が発生することはありますか？それはどのような場合ですか？",
            "複数の作業を並行して進めることはありますか？その場合の優先順位の付け方を教えてください。"
        ]
    },
    judgment: {
        title: "判断基準・意思決定に関する質問",
        questions: [
            "業務の中で、ご自身で判断が必要になる場面はどのようなときですか？",
            "その判断をする際、何を基準にしていますか？具体的な例を教えてください。",
            "判断に迷ったとき、誰に相談しますか？または何を参照しますか？",
            "過去の経験から、「こういうケースではこうする」という暗黙のルールはありますか？",
            "新人の方が判断に困りやすいポイントはどこだと思いますか？",
            "上司や関係部署の承認が必要な判断はありますか？その基準は何ですか？",
            "判断の結果、後から修正が必要になったことはありますか？どのようなケースでしたか？"
        ]
    },
    exception: {
        title: "例外処理・イレギュラー対応に関する質問",
        questions: [
            "通常の手順では対応できないケースは、どのくらいの頻度で発生しますか？",
            "イレギュラーな事態が起きたとき、最初に何をしますか？",
            "過去に対応した中で、最も難しかった例外ケースは何ですか？どう対応しましたか？",
            "システムエラーや障害が発生した場合の対応手順を教えてください。",
            "締切に間に合わない場合、どのような調整を行いますか？",
            "他部署からの急な依頼や変更要求があった場合、どう対処していますか？",
            "例外対応のためのマニュアルやドキュメントは存在しますか？実際に活用していますか？"
        ]
    },
    dependency: {
        title: "他部署・システム連携に関する質問",
        questions: [
            "この業務を進める上で、関わる他部署はどこですか？それぞれとの関わり方を教えてください。",
            "他部署からの情報提供が遅れると、業務に影響がありますか？どのように対処していますか？",
            "使用しているシステムやツールは何ですか？それぞれの役割を教えてください。",
            "システム間でデータを手作業で転記している箇所はありますか？",
            "外部のベンダーや取引先とのやり取りで、特に注意している点は何ですか？",
            "情報の受け渡しは、どのような形式・方法で行っていますか？（メール、Excel、システム登録など）",
            "関係者間での認識のずれや、コミュニケーションミスが起きやすい場面はありますか？"
        ]
    },
    skills: {
        title: "必要なスキル・暗黙知に関する質問",
        questions: [
            "この業務を担当するために、最も重要なスキルや知識は何だと思いますか？",
            "新しく配属された方が一人前になるまで、どのくらいの期間が必要ですか？",
            "ベテランの方と新人の方で、業務の進め方に違いは出ますか？具体的にどのような点ですか？",
            "経験を積むことで身につく「コツ」のようなものはありますか？",
            "業務上の「勘所」や「見極めるポイント」があれば教えてください。",
            "過去の失敗経験から学んだことで、今も気をつけていることはありますか？",
            "マニュアルには書かれていないが、実務上重要なことは何ですか？"
        ]
    },
    problems: {
        title: "課題・改善ポイントに関する質問",
        questions: [
            "現在の業務で、最も負担に感じている部分はどこですか？",
            "もっと効率化できると思う作業はありますか？どのように改善したいですか？",
            "ミスが発生しやすい作業はありますか？その原因は何だと思いますか？",
            "システムや仕組みの制約で、やりにくいと感じることはありますか？",
            "業務量の波（繁閑）はありますか？繁忙期はどのように乗り切っていますか？",
            "もし予算や制約がなければ、どのように業務を変えたいですか？",
            "後任の方に引き継ぐとしたら、特に伝えたいことは何ですか？"
        ]
    }
};

// インタビュースクリプトの生成
function generateScript(formData) {
    const { processName, department, role, background, purpose, focus } = formData;

    let script = '';

    // ヘッダー情報
    script += '═══════════════════════════════════════════════════════════\n';
    script += '        ビジネスプロセス インタビュースクリプト\n';
    script += '═══════════════════════════════════════════════════════════\n\n';

    script += `【対象業務】${processName}\n`;
    script += `【部門】${department}\n`;
    script += `【対象者】${role}\n`;
    if (background) {
        script += `【背景】${background}\n`;
    }
    if (purpose) {
        script += `【目的】${purpose}\n`;
    }
    script += `【作成日】${new Date().toLocaleDateString('ja-JP')}\n\n`;

    // オープニング
    script += '───────────────────────────────────────────────────────────\n';
    script += '【１】オープニング\n';
    script += '───────────────────────────────────────────────────────────\n\n';

    script += '■ アイスブレイクと目的説明\n\n';
    script += '「本日はお時間をいただきありがとうございます。\n';
    script += `${processName}について、現場で実際に業務を担当されている${role}の視点から、\n`;
    script += '詳しくお話を伺いたいと思います。\n\n';
    script += '特に、マニュアルには書かれていない判断基準や、\n';
    script += '経験に基づいたノウハウなども教えていただけると助かります。」\n\n';

    script += '💡 【インタビュアーへのTip】\n';
    script += 'リラックスした雰囲気を作り、「正解・不正解はない」「現状を批判するものではない」\n';
    script += 'ことを伝えて、率直な意見を引き出しやすくしましょう。\n\n\n';

    // 業務概要の確認
    script += '───────────────────────────────────────────────────────────\n';
    script += '【２】業務概要の確認\n';
    script += '───────────────────────────────────────────────────────────\n\n';

    script += `Q1. 「まず、${processName}の全体像について教えていただけますか？\n`;
    script += '     この業務の目的や、最終的なアウトプットは何でしょうか？」\n\n';

    script += 'Q2. 「この業務は、いつ、どのような頻度で発生しますか？\n';
    script += '     （日次、週次、月次、イベント発生時など）」\n\n';

    script += `Q3. 「${department}内で、この業務に関わるメンバーは何名くらいいらっしゃいますか？\n`;
    script += '     それぞれの役割分担を教えてください。」\n\n';

    script += '💡 【インタビュアーへのTip】\n';
    script += '業務の全体像を把握しながら、対象者の業務理解度や説明の詳しさを確認しましょう。\n';
    script += 'ここで出た用語や不明点はメモして、後で深掘りします。\n\n\n';

    // 選択された重点項目に基づく質問
    focus.forEach((category, index) => {
        const template = questionTemplates[category];
        if (template) {
            script += '───────────────────────────────────────────────────────────\n';
            script += `【${index + 3}】${template.title}\n`;
            script += '───────────────────────────────────────────────────────────\n\n';

            template.questions.forEach((question, qIndex) => {
                script += `Q${qIndex + 1}. 「${question}」\n\n`;

                // 追加の掘り下げ質問のヒント
                if (qIndex === 0) {
                    script += '   【掘り下げポイント】\n';
                    script += '   - 「具体的にはどのような...？」\n';
                    script += '   - 「それはなぜですか？」\n';
                    script += '   - 「例えば、最近の事例で教えていただけますか？」\n\n';
                }
            });

            script += '💡 【インタビュアーへのTip】\n';
            if (category === 'workflow') {
                script += '実際の画面や帳票を見せてもらいながら説明を受けると、より具体的な理解が深まります。\n';
                script += '「いつもの作業を実演してもらう」のも効果的です。\n\n\n';
            } else if (category === 'judgment') {
                script += '判断基準は暗黙知の宝庫です。「なぜそう判断するのか」を繰り返し聞きましょう。\n';
                script += '具体的な数値基準や、過去の事例を引き出すことが重要です。\n\n\n';
            } else if (category === 'exception') {
                script += '例外対応には、その人の経験とスキルが凝縮されています。\n';
                script += '「失敗談」も積極的に聞くことで、リスクの予防策を学べます。\n\n\n';
            } else if (category === 'dependency') {
                script += '業務の依存関係を図に描きながら整理すると、ボトルネックが見えてきます。\n';
                script += 'システム連携の「つなぎ目」に非効率が潜んでいることが多いです。\n\n\n';
            } else if (category === 'skills') {
                script += 'ベテランが「当たり前」と思っていることが、実は重要なスキルであることが多いです。\n';
                script += '「新人が苦労する点」を聞くと、暗黙知が浮き彫りになります。\n\n\n';
            } else if (category === 'problems') {
                script += '現場の不満や愚痴の中に、改善のヒントが隠れています。\n';
                script += '批判ではなく「より良くするための意見」として受け止める姿勢を示しましょう。\n\n\n';
            }
        }
    });

    // クロージング
    const closingSection = focus.length + 3;
    script += '───────────────────────────────────────────────────────────\n';
    script += `【${closingSection}】クロージング\n`;
    script += '───────────────────────────────────────────────────────────\n\n';

    script += 'Q1. 「これまでのお話以外で、この業務について\n';
    script += '     私たちが知っておくべきことはありますか？」\n\n';

    script += 'Q2. 「今後、業務プロセスの見直しを進めていく上で、\n';
    script += '     不安に思うことや、期待することがあれば教えてください。」\n\n';

    script += 'Q3. 「本日のインタビュー内容について、\n';
    script += '     後日、確認や追加でお聞きしたいことが出てくる可能性がありますが、\n';
    script += '     その際はまたご協力いただけますでしょうか？」\n\n';

    script += '■ 感謝の言葉\n\n';
    script += '「本日は貴重なお話をありがとうございました。\n';
    script += '現場の生の声を聞かせていただき、大変参考になりました。\n';
    script += '今後の業務改善に活かしてまいります。」\n\n';

    script += '💡 【インタビュアーへのTip】\n';
    script += 'インタビュー後は速やかに議事録を作成し、対象者に確認してもらいましょう。\n';
    script += '「言った/言わない」のトラブルを防ぎ、信頼関係を築くことができます。\n\n\n';

    // フッター
    script += '═══════════════════════════════════════════════════════════\n';
    script += '【インタビュー実施時の注意点】\n';
    script += '═══════════════════════════════════════════════════════════\n\n';

    script += '✓ 対象者の話を遮らず、最後まで聞く\n';
    script += '✓ 専門用語や略語は、その場で意味を確認する\n';
    script += '✓ 「なぜ」「どのように」を繰り返し、深掘りする\n';
    script += '✓ 否定的な言葉は使わず、中立的な立場を保つ\n';
    script += '✓ 実物（画面、帳票、データ）を見せてもらう\n';
    script += '✓ 録音や議事録の取り方について、事前に了承を得る\n';
    script += '✓ 想定時間（60〜90分程度）を守り、長引く場合は別途設定する\n\n';

    script += '【暗黙知を引き出すための質問テクニック】\n\n';

    script += '1️⃣ 具体化の質問\n';
    script += '   「具体的には？」「例えば？」「最近の事例では？」\n\n';

    script += '2️⃣ 理由の質問\n';
    script += '   「なぜそうしているのですか？」「その判断の根拠は？」\n\n';

    script += '3️⃣ 比較の質問\n';
    script += '   「ベテランと新人で違いは？」「以前と今で変わったことは？」\n\n';

    script += '4️⃣ 例外の質問\n';
    script += '   「うまくいかないケースは？」「困った経験は？」\n\n';

    script += '5️⃣ 感情の質問\n';
    script += '   「どう感じますか？」「何が一番大変ですか？」\n\n';

    return script;
}

// フォーム送信処理
document.getElementById('interviewForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        processName: document.getElementById('processName').value,
        department: document.getElementById('department').value,
        role: document.getElementById('role').value,
        background: document.getElementById('background').value,
        purpose: document.getElementById('purpose').value,
        focus: Array.from(document.querySelectorAll('input[name="focus"]:checked'))
                    .map(cb => cb.value)
    };

    // スクリプト生成
    const script = generateScript(formData);

    // 出力セクションを表示
    document.getElementById('scriptOutput').textContent = script;
    document.getElementById('outputSection').style.display = 'block';

    // 出力セクションまでスクロール
    document.getElementById('outputSection').scrollIntoView({ behavior: 'smooth' });
});

// クリップボードにコピー
function copyToClipboard() {
    const scriptText = document.getElementById('scriptOutput').textContent;
    navigator.clipboard.writeText(scriptText).then(function() {
        alert('スクリプトをクリップボードにコピーしました！');
    }).catch(function(err) {
        alert('コピーに失敗しました: ' + err);
    });
}

// スクリプトをダウンロード
function downloadScript() {
    const scriptText = document.getElementById('scriptOutput').textContent;
    const processName = document.getElementById('processName').value;
    const date = new Date().toISOString().split('T')[0];
    const filename = `インタビュースクリプト_${processName}_${date}.txt`;

    const blob = new Blob([scriptText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

// フォームをリセット
function resetForm() {
    document.getElementById('interviewForm').reset();
    document.getElementById('outputSection').style.display = 'none';

    // フォーカス項目を全てチェック状態に戻す
    document.querySelectorAll('input[name="focus"]').forEach(cb => {
        cb.checked = true;
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}
