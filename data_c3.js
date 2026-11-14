// CHƯƠNG 3: CHỨC NĂNG HOẠCH ĐỊNH / LẬP KẾ HOẠCH (8 CÂU)
window.DATA_C3 = [
  {
    id: 28,
    chapter: 3,
    stage: 2,
    code: "C3.Q1",
    title: "Chức năng Lập kế hoạch (Hoạch định) - Vai trò & Ý nghĩa",
    question: "Thế nào là chức năng lập kế hoạch? Vai trò và ý nghĩa?",
    keywords: ["Mục tiêu & Phương thức", "5W + 1H", "Kim chỉ nam định hướng", "Giảm bất định", "Cơ sở kiểm tra"],
    summary: [
      "Hoạch định: Quá trình xác định mục tiêu và lựa chọn phương thức, lộ trình, nguồn lực tối ưu để đạt mục tiêu trong tương lai (5W+1H).",
      "Vai trò: Định hướng hành động thống nhất, Giảm thiểu rủi ro/bất định, Tối ưu hóa nguồn lực, Thiết lập tiêu chuẩn kiểm tra."
    ],
    explanation: `
      <p><strong>1. Khái niệm Hoạch định:</strong></p>
      <p>Hoạch định (Planning) là chức năng khởi đầu của tiến trình quản trị, là quá trình xác định các <strong>mục tiêu</strong> cần đạt tới trong tương lai và lựa chọn các <strong>chiến lược, biện pháp, nguồn lực</strong> thích hợp nhất để đạt được những mục tiêu đó. Hoạch định trả lời câu hỏi <strong>5W + 1H</strong>: <em>Làm cái gì (What)? Tại sao làm (Why)? Ai làm (Who)? Ở đâu (Where)? Khi nào (When)? Làm như thế nào và chi phí bao nhiêu (How)?</em>.</p>
      <p><strong>2. Bốn vai trò và ý nghĩa sống còn của Hoạch định:</strong></p>
      <ul>
        <li><strong>Định hướng tương lai thống nhất:</strong> Giúp toàn thể nhân viên và các bộ phận hiểu rõ đích đến chung, cùng nhìn về một hướng, tránh làm việc manh mún, tự phát.</li>
        <li><strong>Giảm thiểu tính bất định và hạn chế rủi ro:</strong> Bằng cách phân tích xu hướng môi trường vĩ mô và vi mô, hoạch định giúp doanh nghiệp chủ động chuẩn bị kịch bản ứng phó thay vì bị động bất ngờ.</li>
        <li><strong>Tối ưu hóa nguồn lực, giảm lãng phí:</strong> Hoạch định phân bổ chính xác nhân lực, vật lực, tài lực cho các ưu tiên hàng đầu, loại bỏ các hoạt động chồng chéo, lặp lại.</li>
        <li><strong>Thiết lập tiêu chuẩn làm cơ sở cho chức năng Kiểm tra:</strong> Kế hoạch đề ra các chỉ tiêu cụ thể (doanh số, tiến độ, chất lượng). Không có kế hoạch thì không có thước đo nào để kiểm tra, đánh giá.</li>
      </ul>
    `,
    example: "Một hãng thời trang lập kế hoạch kinh doanh mùa đông từ tháng 6 (dự báo xu hướng áo phao lông vũ, chuẩn bị vải, ký hợp đồng xưởng may) giúp họ không bị động khi mùa rét đến và tối ưu được giá vải rẻ.",
    quiz: {
      question: "Câu nói 'Thất bại trong việc chuẩn bị là chuẩn bị cho sự thất bại' nhấn mạnh trực tiếp vào vai trò của chức năng quản trị nào?",
      options: [
        "A. Chức năng Kiểm tra",
        "B. Chức năng Hoạch định (Lập kế hoạch)",
        "C. Chức năng Động viên",
        "D. Chức năng Ra quyết định cá nhân"
      ],
      answer: 1,
      explanation: "Hoạch định là khâu chuẩn bị mục tiêu và lộ trình hành động; thiếu hoạch định doanh nghiệp sẽ mò mẫm trong hỗn loạn và dễ sụp đổ."
    }
  },
  {
    id: 29,
    chapter: 3,
    stage: 2,
    code: "C3.Q2",
    title: "Phân biệt Kế hoạch Chiến lược và Kế hoạch Tác nghiệp",
    question: "Phân biệt kế hoạch chiến lược và kế hoạch tác nghiệp?",
    keywords: ["Chiến lược (Dài hạn - Cấp cao)", "Tác nghiệp (Ngắn hạn - Cấp cơ sở)", "Bất định cao vs Bất định thấp", "Phạm vi toàn diện vs Cụ thể"],
    summary: [
      "Kế hoạch chiến lược: Dài hạn (3-5 năm), do Cấp cao lập, bao quát toàn công ty, độ bất định cao.",
      "Kế hoạch tác nghiệp: Ngắn hạn (dưới 1 năm/ngày/tuần), do Cấp cơ sở/trung lập, chi tiết từng bước, số liệu chắc chắn."
    ],
    explanation: `
      <div class="academic-table-wrapper">
        <table class="academic-table">
          <tr><th>Tiêu chí so sánh</th><th>Kế hoạch Chiến lược (Strategic Plans)</th><th>Kế hoạch Tác nghiệp (Operational Plans)</th></tr>
          <tr><td><strong>Thời hạn thực hiện</strong></td><td>Dài hạn (thường từ 3 - 5 năm hoặc 10 năm)</td><td>Ngắn hạn (ngày, tuần, tháng, quý, dưới 1 năm)</td></tr>
          <tr><td><strong>Cấp quản trị chủ trì</strong></td><td><strong>Quản trị viên cấp cao</strong> (HĐQT, CEO)</td><td><strong>Quản trị viên cấp cơ sở & cấp trung</strong></td></tr>
          <tr><td><strong>Phạm vi ảnh hưởng</strong></td><td>Bao quát toàn diện toàn bộ tổ chức</td><td>Thu hẹp trong từng bộ phận, xưởng, ca kíp</td></tr>
          <tr><td><strong>Mục tiêu cốt lõi</strong></td><td>Định vị thương hiệu, tạo lợi thế cạnh tranh dài hạn</td><td>Thực hiện các chỉ tiêu công việc cụ thể hàng ngày</td></tr>
          <tr><td><strong>Mức độ bất định & Rủi ro</strong></td><td>Rất cao, nhiều biến số môi trường khó lường</td><td>Thấp, điều kiện môi trường tương đối ổn định</td></tr>
          <tr><td><strong>Mức độ chi tiết</strong></td><td>Khái quát, định hướng vĩ mô, linh hoạt cao</td><td>Rất chi tiết, lượng hóa thành bảng biểu, quy trình cụ thể</td></tr>
        </table>
      </div>
      <p><em>Mối quan hệ:</em> Kế hoạch chiến lược là định hướng khung sườn; Kế hoạch tác nghiệp là công cụ cụ thể hóa để biến chiến lược thành hiện thực.</p>
    `,
    example: "Chiến lược 5 năm của VinFast là chuyển đổi 100% sang xe điện và mở thị trường Mỹ (Kế hoạch chiến lược). Kế hoạch tuần của Xưởng lắp ráp ắc quy là hoàn thành 500 pack pin trong 7 ngày (Kế hoạch tác nghiệp).",
    quiz: {
      question: "Kế hoạch phân công ca kíp làm việc và chỉ tiêu sản lượng hàng tuần cho công nhân thuộc loại kế hoạch nào?",
      options: [
        "A. Kế hoạch chiến lược cấp tập đoàn",
        "B. Kế hoạch tác nghiệp",
        "C. Sứ mệnh của doanh nghiệp",
        "D. Chiến lược khác biệt hóa sản phẩm"
      ],
      answer: 1,
      explanation: "Phân công ca kíp và chỉ tiêu hàng tuần mang tính ngắn hạn, cụ thể, do cấp cơ sở quản lý nên là Kế hoạch tác nghiệp."
    }
  },
  {
    id: 30,
    chapter: 3,
    stage: 2,
    code: "C3.Q3",
    title: "So sánh các loại Kế hoạch theo Hình thức thể hiện",
    question: "So sánh các loại kế hoạch trong hệ thống kế hoạch theo hình thức thể hiện?",
    keywords: ["Mục tiêu", "Chiến lược", "Chính sách", "Thủ tục", "Quy tắc", "Chương trình", "Ngân sách"],
    summary: [
      "Hệ thống kế hoạch xếp theo mức độ từ trừu tượng đến cụ thể:",
      "Mục tiêu -> Chiến lược -> Chính sách -> Thủ tục -> Quy tắc -> Chương trình -> Ngân sách."
    ],
    explanation: `
      <p>Căn cứ vào hình thức biểu hiện, hệ thống kế hoạch gồm 8 cấp bậc phân tầng chặt chẽ:</p>
      <ul>
        <li><strong>1. Sứ mệnh / Viễn cảnh (Mission/Vision):</strong> Tuyên ngôn về lý do tồn tại tối thượng, triết lý hoạt động và đích đến tương lai của tổ chức.</li>
        <li><strong>2. Mục tiêu (Goals/Objectives):</strong> Những mốc kết quả cụ thể cần đạt được tại một thời điểm nhất định (thường chuẩn SMART: Cụ thể, Đo lường được, Khả thi, Thích hợp, Có hạn định).</li>
        <li><strong>3. Chiến lược (Strategies):</strong> Chương trình hành động tổng quát và phân bổ các nguồn lực để đạt được mục tiêu lớn chống lại đối thủ.</li>
        <li><strong>4. Chính sách (Policies):</strong> Những quan điểm, chỉ dẫn chung làm kim chỉ nam định hướng cho cấp dưới khi ra quyết định trong những tình huống nhất định (VD: Chính sách đổi trả hàng trong 7 ngày).</li>
        <li><strong>5. Thủ tục (Procedures):</strong> Trình tự thời gian bắt buộc gồm các bước kế tiếp nhau để giải quyết một quy trình công việc cụ thể (VD: Thủ tục duyệt chi tài chính).</li>
        <li><strong>6. Quy tắc (Rules):</strong> Những quy định cụ thể, nghiêm ngặt bắt buộc phải làm hoặc cấm làm, không cho phép có sự linh hoạt hay giải thích nào khác (VD: Cấm hút thuốc lá trong kho xăng dầu).</li>
        <li><strong>7. Chương trình (Programs):</strong> Tập hợp đồng bộ các mục tiêu, chính sách, thủ tục, quy tắc và nguồn lực cần thiết để hoàn thành một nhiệm vụ đặc biệt (VD: Chương trình tiêm vắc xin cho toàn công ty).</li>
        <li><strong>8. Ngân sách (Budgets):</strong> Bản kế hoạch được lượng hóa hoàn toàn bằng các con số tiền tệ, doanh thu, chi phí hoặc đơn vị sản phẩm dự kiến trong một kỳ (VD: Ngân sách Marketing 2 tỷ VNĐ năm 2026).</li>
      </ul>
    `,
    example: "Quy tắc: 'Nhân viên không được dùng điện thoại khi lái xe nâng hàng' (Bắt buộc 100%, không linh hoạt). Chính sách: 'Ưu tiên thăng chức cho nhân sự nội bộ' (Có tính định hướng, cho phép linh hoạt xem xét).",
    quiz: {
      question: "Hình thức kế hoạch nào thể hiện các quy định cụ thể, dứt khoát bắt buộc phải làm hoặc không được làm và KHÔNG cho phép người thực hiện có quyền linh hoạt?",
      options: [
        "A. Chính sách (Policies)",
        "B. Quy tắc (Rules)",
        "C. Chiến lược (Strategies)",
        "D. Sứ mệnh (Mission)"
      ],
      answer: 1,
      explanation: "Quy tắc (Rules) là những chỉ dẫn nghiêm ngặt nhất, không cho phép bất kỳ sự suy diễn hay linh hoạt nào (ví dụ: Biển báo Cấm lửa)."
    }
  },
  {
    id: 31,
    chapter: 3,
    stage: 2,
    code: "C3.Q4",
    title: "Các đặc trưng cơ bản của Chiến lược kinh doanh",
    question: "Phân tích các đặc trưng cơ bản của chiến lược kinh doanh?",
    keywords: ["Định hướng dài hạn", "Lợi thế cạnh tranh (Competitive Advantage)", "Phân bổ nguồn lực", "Thích ứng môi trường", "Tính toàn diện"],
    summary: [
      "1. Tính định hướng dài hạn: Nhìn xa trông rộng 3-5-10 năm.",
      "2. Tính tạo lập lợi thế cạnh tranh bền vững: Khác biệt hóa hoặc chi phí thấp.",
      "3. Tính tập trung và phân bổ nguồn lực có trọng điểm.",
      "4. Tính thích ứng linh hoạt với môi trường luôn biến động.",
      "5. Tính hệ thống và toàn diện gắn kết mọi bộ phận."
    ],
    explanation: `
      <p>Chiến lược kinh doanh là nghệ thuật chiến thắng trên thương trường, có <strong>5 đặc trưng cốt lõi</strong>:</p>
      <ul>
        <li><strong>1. Tính định hướng dài hạn:</strong> Chiến lược không quan tâm đến những thành bại sự vụ vụn vặt ngày một ngày hai mà vạch ra con đường phát triển của doanh nghiệp trong tương lai dài hạn (3-5 năm hoặc thập kỷ).</li>
        <li><strong>2. Tính tạo lập lợi thế cạnh tranh bền vững (Sustainable Competitive Advantage):</strong> Mục tiêu tối thượng của chiến lược là giúp doanh nghiệp có được điểm mạnh vượt trội mà đối thủ khó sao chép được (như công nghệ độc quyền, chi phí siêu thấp, thương hiệu đẳng cấp).</li>
        <li><strong>3. Tính tập trung và phân bổ nguồn lực:</strong> Vì nguồn lực doanh nghiệp luôn khan hiếm, chiến lược đòi hỏi phải dũng cảm nói "KHÔNG" với những cơ hội phụ để dồn toàn lực vào "quả đấm thép" then chốt.</li>
        <li><strong>4. Tính thích ứng cao với môi trường biến động:</strong> Chiến lược là kế hoạch mở, luôn có các kịch bản dự phòng để thích nghi linh hoạt khi kinh tế, công nghệ hay chính sách pháp luật biến đổi.</li>
        <li><strong>5. Tính toàn diện và phối hợp hệ thống:</strong> Chiến lược đòi hỏi sự đồng bộ nhịp nhàng của tất cả các khối: Marketing, Tài chính, R&D, Sản xuất, Nhân sự để tạo nên sức mạnh tổng lực.</li>
      </ul>
    `,
    example: "Chiến lược khác biệt hóa của Apple: Tập trung vào thiết kế tối giản sang trọng và hệ điều hành iOS khép kín, kiên quyết không giảm giá rẻ để giữ vững lợi thế cạnh tranh phân khúc cao cấp.",
    quiz: {
      question: "Mục đích tối thượng và cốt lõi nhất của việc xây dựng chiến lược kinh doanh là gì?",
      options: [
        "A. Tạo lập và duy trì lợi thế cạnh tranh bền vững so với các đối thủ",
        "B. Tăng số lượng trang giấy của tập tài liệu kế hoạch",
        "C. Loại bỏ hoàn toàn sự có mặt của nhân viên",
        "D. Tránh né việc nộp thuế nhà nước"
      ],
      answer: 0,
      explanation: "Lợi thế cạnh tranh bền vững là chìa khóa sống còn giúp doanh nghiệp đứng vững và thu được lợi nhuận vượt trội so với đối thủ."
    }
  },
  {
    id: 32,
    chapter: 3,
    stage: 2,
    code: "C3.Q5",
    title: "Các cấp Chiến lược trong Tổ chức",
    question: "Trình bày các cấp chiến lược trong một tổ chức?",
    keywords: ["Chiến lược Cấp công ty (Corporate)", "Chiến lược Cấp kinh doanh (Business/SBU)", "Chiến lược Cấp chức năng (Functional)"],
    summary: [
      "Cấp công ty (Corporate): Do HĐQT/CEO định đoạt - Tham gia vào những ngành nào? (Tăng trưởng, đa dạng hóa, rút lui).",
      "Cấp kinh doanh (Business/SBU): Làm thế nào để chiến thắng trong ngành này? (Dẫn đầu chi phí, Khác biệt hóa, Tập trung).",
      "Cấp chức năng (Functional): Hỗ trợ thực thi chiến lược kinh doanh (Marketing, Tài chính, R&D, Nhân sự)."
    ],
    explanation: `
      <p>Trong một tập đoàn hoặc doanh nghiệp nhiều ngành, chiến lược được chia thành 3 tầng cấp độ:</p>
      <div class="academic-table-wrapper">
        <table class="academic-table">
          <tr><th>Cấp chiến lược</th><th>Chủ thể hoạch định</th><th>Câu hỏi chiến lược cốt lõi</th><th>Nội dung & Lựa chọn tiêu biểu</th></tr>
          <tr>
            <td><strong>1. Cấp Công ty / Tập đoàn (Corporate Strategy)</strong></td>
            <td>Hội đồng quản trị, Tổng giám đốc (CEO)</td>
            <td><em>'Chúng ta nên tham gia vào những ngành kinh doanh nào?'</em></td>
            <td>Xác định danh mục đầu tư: Chiến lược tăng trưởng tập trung, Chiến lược hội nhập (dọc, ngang), Đa dạng hóa ngành nghề, hoặc Thoái vốn cắt giảm.</td>
          </tr>
          <tr>
            <td><strong>2. Cấp Đơn vị kinh doanh (Business / SBU Strategy)</strong></td>
            <td>Giám đốc đơn vị kinh doanh chiến lược (SBU)</td>
            <td><em>'Làm thế nào để cạnh tranh thắng lợi trong ngành cụ thể này?'</em></td>
            <td>Áp dụng 3 chiến lược cạnh tranh gốc của Michael Porter: 1. Dẫn đầu về chi phí thấp; 2. Khác biệt hóa sản phẩm; 3. Chiến lược tập trung vào phân khúc ngách.</td>
          </tr>
          <tr>
            <td><strong>3. Cấp Chức năng (Functional Strategy)</strong></td>
            <td>Trưởng các khối phòng ban chuyên môn</td>
            <td><em>'Làm thế nào để vận hành tối ưu từng bộ phận nhằm hỗ trợ SBU?'</em></td>
            <td>Chiến lược Marketing (4P/7P), Chiến lược Tài chính (huy động vốn), Chiến lược R&D (nghiên cứu mẫu mới), Chiến lược Nhân sự (giữ chân nhân tài).</td>
          </tr>
        </table>
      </div>
    `,
    example: "Tập đoàn Masan: Cấp công ty quyết định đầu tư vào ngành bán lẻ tiêu dùng (mua WinCommerce); Cấp kinh doanh WinMart định vị bán lẻ tiện lợi phủ sóng khắp ngõ ngách; Cấp chức năng Marketing của WinMart chạy chương trình 'Hội viên Win' giảm giá thịt tươi sạch.",
    quiz: {
      question: "Câu hỏi 'Làm thế nào để đơn vị của chúng ta cạnh tranh thắng lợi trước các đối thủ trong ngành nước đóng chai?' thuộc thẩm quyền của cấp chiến lược nào?",
      options: [
        "A. Chiến lược cấp công ty (Corporate)",
        "B. Chiến lược cấp đơn vị kinh doanh (Business / SBU)",
        "C. Chiến lược tác nghiệp ca kíp",
        "D. Chiến lược ngoại cảm"
      ],
      answer: 1,
      explanation: "Chiến lược cấp SBU/kinh doanh tập trung vào việc tạo lập lợi thế cạnh tranh trực tiếp trong một thị trường hay ngành hàng cụ thể."
    }
  },
  {
    id: 33,
    chapter: 3,
    stage: 2,
    code: "C3.Q6",
    title: "Mô hình 5 Lực lượng Cạnh tranh của Michael Porter",
    question: "Phân tích các lực lượng cạnh tranh trong mô hình năm lực lượng cạnh tranh trong ngành của M.Porter?",
    keywords: ["M. Porter", "Đối thủ hiện tại", "Khách hàng", "Nhà cung cấp", "Đối thủ tiềm ẩn", "Sản phẩm thay thế"],
    summary: [
      "Mục đích: Xác định mức độ hấp dẫn và tiềm năng sinh lời của một ngành kinh doanh.",
      "5 Lực lượng: 1. Cạnh tranh giữa các đối thủ hiện tại trong ngành; 2. Sức ép từ khách hàng; 3. Sức ép từ nhà cung ứng; 4. Nguy cơ từ đối thủ tiềm ẩn mới; 5. Mối đe dọa từ sản phẩm thay thế."
    ],
    explanation: `
      <p>Giáo sư <strong>Michael Porter (Harvard)</strong> khẳng định lợi nhuận bình quân của một ngành bị chi phối bởi 5 lực lượng cạnh tranh cấu trúc:</p>
      <ul>
        <li><strong>1. Mức độ cạnh tranh giữa các đối thủ hiện tại trong ngành:</strong> Cường độ đối đầu về giá bán, quảng cáo, mạng lưới phân phối giữa các hãng đang có mặt (ngành có càng nhiều đối thủ quy mô ngang nhau thì cạnh tranh càng khốc liệt, lợi nhuận càng mỏng).</li>
        <li><strong>2. Nguy cơ xâm nhập của các đối thủ tiềm ẩn (New Entrants):</strong> Sự đe dọa của các doanh nghiệp mới nhảy vào ngành làm chia nhỏ thị phần. Mức độ đe dọa phụ thuộc vào <em>Rào cản gia nhập</em> (vốn đầu tư ban đầu, lợi thế kinh tế theo quy mô, bằng sáng chế, rào cản kênh phân phối).</li>
        <li><strong>3. Áp lực đe dọa từ các sản phẩm thay thế (Substitute Products):</strong> Là những sản phẩm khác ngành nhưng đáp ứng cùng một nhu cầu của khách hàng (VD: Tàu hỏa cao tốc thay thế máy bay chặng ngắn; xe máy điện thay thế xe máy xăng). Sản phẩm thay thế đặt trần giá cho sản phẩm của ngành.</li>
        <li><strong>4. Quyền lực thương lượng của Khách hàng / Người mua (Buyer Power):</strong> Người mua ép doanh nghiệp phải giảm giá hoặc đòi hỏi chất lượng dịch vụ cao hơn. Quyền lực khách hàng rất lớn khi: số lượng người mua ít nhưng mua số lượng lớn, chi phí chuyển đổi nhà cung cấp của họ thấp.</li>
        <li><strong>5. Quyền lực thương lượng của Nhà cung cấp (Supplier Power):</strong> Nhà cung ứng gây áp lực bằng cách tăng giá nguyên vật liệu hoặc giao hàng chậm. Quyền lực nhà cung cấp cao khi nguyên liệu khan hiếm, độc quyền hoặc không có sản phẩm thay thế.</li>
      </ul>
    `,
    example: "Ngành gọi xe công nghệ: Khách hàng có quyền lực thương lượng rất cao (dễ dàng bật Grab, Be, Xanh SM để so sánh giá xem bên nào rẻ hơn trong 30 giây vì chi phí chuyển đổi bằng 0).",
    quiz: {
      question: "Theo mô hình của Michael Porter, rào cản gia nhập ngành (như vốn đầu tư khổng lồ, công nghệ độc quyền) càng cao thì điều gì sẽ xảy ra?",
      options: [
        "A. Nguy cơ xuất hiện đối thủ tiềm ẩn mới càng thấp, doanh nghiệp trong ngành được bảo vệ tốt hơn",
        "B. Khách hàng sẽ tẩy chay sản phẩm",
        "C. Nhà cung ứng sẽ lập tức hạ giá nguyên liệu",
        "D. Mức độ cạnh tranh trong ngành bị xóa bỏ hoàn toàn"
      ],
      answer: 0,
      explanation: "Rào cản gia nhập cao hoạt động như bức tường thành ngăn cản đối thủ mới bước chân vào ngành, giúp giữ vững thị phần và biên lợi nhuận cho các hãng hiện tại."
    }
  },
  {
    id: 34,
    chapter: 3,
    stage: 2,
    code: "C3.Q7",
    title: "Chiến lược trong Ma trận BCG và Ma trận SWOT",
    question: "Các chiến lược trong ma trận BCG, SWOT",
    keywords: ["Ma trận BCG (Ngôi sao, Bò sữa, Dấu hỏi, Chó)", "Ma trận SWOT (SO, WO, ST, WT)", "Tăng trưởng thị trường & Thị phần"],
    summary: [
      "BCG: Ngôi sao (Đầu tư mạnh), Bò sữa (Thu tiền/Vắt sữa), Dấu hỏi (Cân nhắc đầu tư hoặc thoái vốn), Chó (Cắt giảm/Giải thể).",
      "SWOT: SO (Tấn công chớp cơ hội), WO (Khắc phục yếu đón cơ hội), ST (Dùng mạnh chặn rủi ro), WT (Phòng thủ rút lui)."
    ],
    explanation: `
      <p><strong>1. Ma trận BCG (Boston Consulting Group):</strong></p>
      <p>Dựa trên 2 tiêu chí: <strong>Tốc độ tăng trưởng thị trường</strong> (Trục tung) và <strong>Thị phần tương đối</strong> (Trục hoành):</p>
      <div class="academic-table-wrapper">
        <table class="academic-table">
          <tr><th>Ô chiến lược</th><th>Đặc điểm cấu trúc</th><th>Định hướng chiến lược tối ưu</th></tr>
          <tr>
            <td><strong>Ngôi sao (Stars)</strong></td>
            <td>Tăng trưởng cao + Thị phần cao</td>
            <td><strong>Đầu tư phát triển mạnh mẽ</strong> để duy trì vị thế dẫn đầu; tương lai sẽ trở thành Bò sữa khi thị trường bão hòa.</td>
          </tr>
          <tr>
            <td><strong>Bò sữa (Cash Cows)</strong></td>
            <td>Tăng trưởng thấp + Thị phần cao</td>
            <td><strong>Chiến lược 'Vắt sữa':</strong> Tạo dòng tiền mặt cực lớn với chi phí đầu tư ít; dùng tiền thu được nuôi Ngôi sao và Dấu hỏi.</td>
          </tr>
          <tr>
            <td><strong>Dấu hỏi (Question Marks)</strong></td>
            <td>Tăng trưởng cao + Thị phần thấp</td>
            <td><strong>Lựa chọn thận trọng:</strong> Bơm vốn đầu tư có chọn lọc để đẩy thành Ngôi sao, hoặc quyết định bán/thoái vốn nếu không cạnh tranh nổi.</td>
          </tr>
          <tr>
            <td><strong>Chó còi (Dogs)</strong></td>
            <td>Tăng trưởng thấp + Thị phần thấp</td>
            <td><strong>Thu hẹp, cắt giảm hoặc thanh lý giải thể</strong> để bảo toàn vốn, tránh thâm hụt tài chính.</td>
          </tr>
        </table>
      </div>
      <p><strong>2. Ma trận SWOT (Điểm mạnh S, Điểm yếu W, Cơ hội O, Thách thức T):</strong></p>
      <div class="academic-table-wrapper">
        <table class="academic-table">
          <tr><th>Chiến lược phối hợp</th><th>Bản chất logic</th><th>Hành động tiêu biểu</th></tr>
          <tr><td><strong>Chiến lược S - O</strong></td><td>Phát huy điểm mạnh để nắm bắt cơ hội bên ngoài</td><td>Chiến lược tấn công, mở rộng thị trường thần tốc</td></tr>
          <tr><td><strong>Chiến lược W - O</strong></td><td>Khắc phục điểm yếu nội bộ bằng cách tận dụng cơ hội</td><td>Liên doanh liên kết, cải tiến dây chuyền để đón đầu thị trường</td></tr>
          <tr><td><strong>Chiến lược S - T</strong></td><td>Dùng điểm mạnh nội bộ để né tránh hoặc hóa giải thách thức</td><td>Đa dạng hóa sản phẩm, dùng tiềm lực tài chính ép đối thủ mới</td></tr>
          <tr><td><strong>Chiến lược W - T</strong></td><td>Giảm thiểu điểm yếu và phòng thủ trước thách thức</td><td>Cắt giảm chi phí, thu hẹp quy mô hoặc tái cơ cấu phòng thủ</td></tr>
        </table>
      </div>
    `,
    example: "iPhone hiện là Bò sữa của Apple (thị phần cao, mang lại hàng chục tỷ USD tiền mặt mỗi quý); Apple dùng tiền này rót vào các dự án Dấu hỏi như Kính Vision Pro và AI.",
    quiz: {
      question: "Trong ma trận BCG, đơn vị kinh doanh thuộc ô 'Bò sữa' (Cash Cows) có đặc trưng gì?",
      options: [
        "A. Tăng trưởng cao và thị phần thấp",
        "B. Tăng trưởng thị trường thấp nhưng thị phần tương đối cao, tạo ra dòng tiền mặt dồi dào",
        "C. Tăng trưởng thấp và thị phần thấp cần phải thanh lý ngay",
        "D. Luôn cần bơm thêm vốn vay ngân hàng để bù lỗ"
      ],
      answer: 1,
      explanation: "Bò sữa thống lĩnh thị phần trong ngành đã bão hòa, ít cần tái đầu tư mở rộng nên tạo ra nguồn tiền thặng dư cực lớn cho doanh nghiệp."
    }
  },
  {
    id: 35,
    chapter: 3,
    stage: 2,
    code: "C3.Q8",
    title: "Hoạch định tác nghiệp & Nội dung của Hoạch định tác nghiệp",
    question: "Thế nào là hoạch định tác nghiệp, nội dung của hoạch định tác nghiệp trong tổ chức?",
    keywords: ["Hoạch định tác nghiệp", "Kế hoạch đơn dụng (Single-use)", "Kế hoạch thường trực (Standing)", "Ngân sách & Chương trình"],
    summary: [
      "Khái niệm: Xây dựng các kế hoạch ngắn hạn (dưới 1 năm), chi tiết hóa việc thực thi chiến lược.",
      "2 Nhóm nội dung: Kế hoạch đơn dụng (Chương trình, Dự án, Ngân sách) và Kế hoạch thường trực (Chính sách, Thủ tục, Quy chế)."
    ],
    explanation: `
      <p><strong>1. Khái niệm Hoạch định tác nghiệp:</strong></p>
      <p>Là quá trình xây dựng các kế hoạch hành động cụ thể, chi tiết, trong thời gian ngắn (ngày, tuần, tháng, quý hoặc dưới 1 năm) nhằm hướng dẫn các hoạt động thường nhật của các bộ phận, đơn vị cơ sở để hoàn thành các mục tiêu chiến thuật và chiến lược đã định.</p>
      <p><strong>2. Hai nhóm nội dung chính của hoạch định tác nghiệp:</strong></p>
      <ul>
        <li><strong>A. Kế hoạch Đơn dụng (Single-use plans):</strong>
          <p>Được thiết kế để giải quyết những hoạt động chỉ diễn ra <strong>MỘT LẦN DUY NHẤT</strong> và không lặp lại trong tương lai:</p>
          <ul>
            <li><em>Chương trình (Program):</em> Kế hoạch phối hợp toàn diện gồm nhiều bước cho một chiến dịch lớn (VD: Chương trình kỷ niệm 20 năm thành lập công ty).</li>
            <li><em>Dự án (Project):</em> Phần việc độc lập, giới hạn phạm vi hẹp hơn trong một chương trình, có mốc thời gian hoàn thành cụ thể.</li>
            <li><em>Ngân sách (Budget):</em> Bản dự toán tài chính thể hiện bằng các con số tiền tệ thu - chi cho hoạt động đó.</li>
          </ul>
        </li>
        <li><strong>B. Kế hoạch Thường trực (Standing plans):</strong>
          <p>Là những hướng dẫn được xây dựng để áp dụng <strong>LẶP ĐI LẶP LẠI</strong> cho những tình huống thường xuyên phát sinh trong tổ chức:</p>
          <ul>
            <li><em>Chính sách (Policy):</em> Nguyên tắc chỉ đạo chung cho suy nghĩ và hành động.</li>
            <li><em>Thủ tục (Procedure):</em> Chuỗi các bước cụ thể theo thời gian để thực thi một công việc chuẩn (SOP).</li>
            <li><em>Quy định / Quy tắc (Rules):</em> Mệnh lệnh dứt khoát về điều được làm và cấm làm.</li>
          </ul>
        </li>
      </ul>
    `,
    example: "Kế hoạch tổ chức Lễ khánh thành nhà máy mới là Kế hoạch đơn dụng (chỉ làm một lần). Quy trình kiểm tra nguyên liệu đầu vào tại cổng kho là Kế hoạch thường trực (ngày nào cũng áp dụng y chang).",
    quiz: {
      question: "Bản kế hoạch nào sau đây thuộc nhóm 'Kế hoạch đơn dụng' (Single-use plans)?",
      options: [
        "A. Quy trình xin nghỉ phép của nhân viên",
        "B. Bản dự toán ngân sách cho chiến dịch quảng cáo Tết Nguyên Đán 2026",
        "C. Nội quy phòng cháy chữa cháy treo trên tường",
        "D. Quy định về trang phục công sở của ngân hàng"
      ],
      answer: 1,
      explanation: "Dự toán ngân sách cho chiến dịch Tết chỉ dùng cho sự kiện duy nhất đó rồi kết thúc, nên thuộc Kế hoạch đơn dụng."
    }
  }
];
