// CHƯƠNG 1: TỔNG QUAN VỀ QUẢN TRỊ & MÔI TRƯỜNG (13 CÂU)
window.DATA_C1 = [
  {
    id: 1,
    chapter: 1,
    stage: 1,
    code: "C1.Q1",
    title: "Tổ chức & Đặc điểm cơ bản của tổ chức",
    question: "Tổ chức là gì? Nêu các đặc điểm cơ bản của tổ chức",
    keywords: ["Tập hợp người", "Mục tiêu chung", "Cơ cấu xác định", "Hệ thống mở"],
    summary: [
      "Định nghĩa: Tập hợp có cơ cấu gồm 2 hay nhiều người cùng hợp tác hướng tới mục tiêu chung.",
      "4 Đặc điểm: Tính mục đích, Tính tập thể (con người), Tính cơ cấu/phân công, Tính tương tác môi trường."
    ],
    explanation: `
      <p><strong>1. Khái niệm Tổ chức:</strong></p>
      <p>Tổ chức là một thực thể xã hội có ý thức, được phối hợp chặt chẽ, có ranh giới tương đối rõ ràng và hoạt động liên tục nhằm đạt được một hoặc một tập hợp các mục tiêu chung.</p>
      <p><strong>2. Bốn đặc điểm cơ bản của tổ chức:</strong></p>
      <ul>
        <li><strong>Tính mục đích (Goal-oriented):</strong> Mọi tổ chức đều được lập ra để theo đuổi sứ mệnh và mục tiêu cụ thể (lợi nhuận, phục vụ cộng đồng, bảo vệ môi trường). Mục tiêu là kim chỉ nam điều hướng mọi nguồn lực.</li>
        <li><strong>Tính tập thể / Con người (People):</strong> Tổ chức luôn bao gồm ít nhất từ 2 người trở lên. Con người là tế bào gốc, là chủ thể thực hiện mọi hoạt động.</li>
        <li><strong>Tính cơ cấu / Phân công lao động (Structure):</strong> Có sự phân chia nhiệm vụ, quyền hạn và trách nhiệm rõ ràng thông qua một sơ đồ tổ chức, chuỗi mệnh lệnh và các cấp quản trị.</li>
        <li><strong>Tính mở & tương tác môi trường (Open System):</strong> Tiếp nhận các yếu tố đầu vào (vốn, nhân lực, công nghệ, nguyên vật liệu) từ môi trường bên ngoài và cung ứng các sản phẩm, dịch vụ đầu ra.</li>
      </ul>
    `,
    example: "Vinamilk là tổ chức gồm hàng ngàn nhân sự, có bộ máy điều hành phân cấp rõ ràng (HĐQT, CEO, các phòng R&D, Bán hàng) cùng hướng đến mục tiêu đưa sản phẩm sữa dinh dưỡng chất lượng cao ra thị trường.",
    quiz: {
      question: "Đặc điểm nào sau đây KHÔNG PHẢI là đặc trưng cơ bản của một tổ chức?",
      options: [
        "A. Hoạt động hoàn toàn độc lập và không phụ thuộc vào môi trường bên ngoài",
        "B. Bao gồm từ hai người trở lên cùng làm việc",
        "C. Có cơ cấu tổ chức và phân công quyền hạn rõ ràng",
        "D. Cùng hướng tới một hoặc một số mục tiêu chung"
      ],
      answer: 0,
      explanation: "Tổ chức là một hệ thống mở (Open System), luôn trao đổi nguồn lực đầu vào và đầu ra với môi trường bên ngoài, không thể hoạt động độc lập."
    }
  },
  {
    id: 2,
    chapter: 1,
    stage: 1,
    code: "C1.Q2",
    title: "Khái niệm Quản trị, Chủ thể & Đối tượng quản trị",
    question: "Thế nào là quản trị? Chủ thể quản trị, đối tượng quản trị?",
    keywords: ["Hoạch định - Tổ chức - Lãnh đạo - Kiểm tra", "Hiệu quả & Hiệu suất", "Chủ thể", "Đối tượng"],
    summary: [
      "Quản trị: Quá trình P-O-L-C các nguồn lực nhằm đạt mục tiêu với hiệu quả (chi phí thấp) và hiệu suất (đạt mục tiêu).",
      "Chủ thể: Người/cơ quan nắm quyền ra quyết định (Nhà quản trị).",
      "Đối tượng: Con người, nguồn lực và hoạt động chịu sự tác động điều khiển."
    ],
    explanation: `
      <p><strong>1. Định nghĩa Quản trị:</strong></p>
      <p>Quản trị là quá trình <strong>hoạch định, tổ chức, lãnh đạo và kiểm tra</strong> các nguồn lực của tổ chức (nhân lực, tài chính, vật chất, thông tin) nhằm đạt được mục tiêu chung một cách tối ưu nhất.</p>
      <div class="academic-table-wrapper">
        <table class="academic-table">
          <tr><th>Khái niệm</th><th>Bản chất</th><th>Câu hỏi then chốt</th></tr>
          <tr><td><strong>Hiệu suất (Efficiency)</strong></td><td>Làm việc đúng cách (Do things right), tối thiểu hóa chi phí, hao phí nguồn lực</td><td>Làm như thế nào để tốn ít chi phí nhất?</td></tr>
          <tr><td><strong>Hiệu quả (Effectiveness)</strong></td><td>Làm đúng việc (Do the right things), hoàn thành đúng mục tiêu đề ra</td><td>Kết quả có đạt được mục tiêu không?</td></tr>
        </table>
      </div>
      <p><strong>2. Chủ thể và Đối tượng quản trị:</strong></p>
      <ul>
        <li><strong>Chủ thể quản trị:</strong> Là các cá nhân hoặc tập thể nắm quyền điều hành (CEO, Giám đốc, Trưởng phòng), có quyền ra quyết định và sử dụng quyền lực để tác động lên cấp dưới.</li>
        <li><strong>Đối tượng quản trị:</strong> Là các thành viên thừa hành, các khâu công việc, dòng tài chính và cơ sở vật chất chịu sự điều khiển, hướng dẫn của chủ thể quản trị.</li>
      </ul>
    `,
    example: "Giám đốc vận hành chuỗi Highland Coffee (Chủ thể) phân bổ định mức nguyên vật liệu và KPI phục vụ cho nhân viên pha chế tại quầy (Đối tượng) để giảm thời gian chờ của khách xuống dưới 3 phút.",
    quiz: {
      question: "Câu nói 'Làm việc đúng cách để tiết kiệm tối đa nguồn lực và chi phí' thể hiện khía cạnh nào trong quản trị?",
      options: [
        "A. Hiệu quả (Effectiveness)",
        "B. Hiệu suất (Efficiency)",
        "C. Quyền lực quản trị",
        "D. Tầm quản trị"
      ],
      answer: 1,
      explanation: "Efficiency (Hiệu suất) phản ánh mối quan hệ giữa đầu vào và đầu ra, nhấn mạnh vào việc giảm thiểu lãng phí và làm việc đúng cách."
    }
  },
  {
    id: 3,
    chapter: 1,
    stage: 1,
    code: "C1.Q3",
    title: "Quản trị tổ chức & Vai trò của hoạt động quản trị",
    question: "Thế nào là quản trị tổ chức? Phân tích vai trò của hoạt động quản trị đối với tổ chức?",
    keywords: ["Hiệp đồng (Synergy)", "Tối ưu hóa nguồn lực", "Thích ứng môi trường", "Định hướng mục tiêu"],
    summary: [
      "Quản trị tổ chức: Nghệ thuật và khoa học kết nối các nguồn lực riêng lẻ thành sức mạnh tổng hợp.",
      "4 Vai trò: Định hướng mục tiêu, Tối ưu nguồn lực (tránh lãng phí), Tạo sức mạnh hiệp đồng (1+1 > 2), Thích ứng môi trường."
    ],
    explanation: `
      <p><strong>1. Khái niệm Quản trị tổ chức:</strong></p>
      <p>Là sự tác động có định hướng của chủ thể quản trị lên đối tượng quản trị trong phạm vi tổ chức nhằm biến những nguồn lực rời rạc thành một hệ thống hoạt động đồng bộ, nhịp nhàng.</p>
      <p><strong>2. Bốn vai trò cốt lõi của hoạt động quản trị:</strong></p>
      <ul>
        <li><strong>Định hướng mục tiêu chung:</strong> Giúp tổ chức không bị lạc hướng giữa vô vàn biến động, gắn kết nỗ lực của từng cá nhân vào bức tranh lớn.</li>
        <li><strong>Tối ưu hóa và tiết kiệm nguồn lực:</strong> Phân phối nhân sự, ngân sách và máy móc hợp lý, loại bỏ các mắt xích thừa thãi, nâng cao năng suất.</li>
        <li><strong>Tạo ra hiệu ứng hiệp đồng (Synergy 1 + 1 > 2):</strong> Phối hợp các cá nhân có thế mạnh khác nhau tạo nên năng lực tập thể vượt trội hơn hẳn tổng các năng lực riêng lẻ.</li>
        <li><strong>Giúp tổ chức thích ứng và tồn tại trong môi trường biến động:</strong> Dự báo rủi ro từ thị trường, chính sách, đối thủ và công nghệ để chủ động tái cấu trúc.</li>
      </ul>
    `,
    example: "Một đội bóng có nhiều ngôi sao nhưng nếu không có Huấn luyện viên trưởng (Nhà quản trị) sắp xếp sơ đồ chiến thuật và tạo tinh thần đồng đội thì không thể giành chiến thắng.",
    quiz: {
      question: "Hiệu ứng 'Synergy' (Hiệp đồng) trong vai trò của quản trị có nghĩa là gì?",
      options: [
        "A. Hiệu quả cá nhân luôn cao hơn hiệu quả tập thể",
        "B. Tổng sức mạnh của tập thể lớn hơn tổng năng lực của các cá nhân riêng lẻ cộng lại (1 + 1 > 2)",
        "C. Cắt giảm 50% nhân sự để tăng gấp đôi lợi nhuận",
        "D. Chỉ tập trung vào quản lý tài chính bỏ qua con người"
      ],
      answer: 1,
      explanation: "Synergy là hiệu ứng cộng hưởng, khi quản trị tốt, sự phối hợp giữa các bộ phận sẽ tạo ra kết quả lớn hơn tổng giá trị của các phần tử riêng rẽ."
    }
  },
  {
    id: 4,
    chapter: 1,
    stage: 1,
    code: "C1.Q4",
    title: "Các cấp quản trị trong tổ chức (Vị trí, Chức danh, Vai trò)",
    question: "Trình bày các cấp quản trị trong một tổ chức? Cho biết vị trí, chức danh, vai trò của từng cấp quản trị?",
    keywords: ["Cấp cao (Top)", "Cấp trung (Middle)", "Cấp cơ sở (First-line)", "Quyết định tương ứng"],
    summary: [
      "Cấp cao: CEO, HĐQT - Hoạch định chiến lược dài hạn, đại diện đối ngoại.",
      "Cấp trung: Trưởng phòng, Quản đốc - Cầu nối, cụ thể hóa chiến lược thành kế hoạch hành động.",
      "Cấp cơ sở: Tổ trưởng, Giám sát - Trực tiếp hướng dẫn công nhân, quản lý công việc hàng ngày."
    ],
    explanation: `
      <p>Trong tổ chức thông thường chia thành 3 cấp quản trị theo mô hình kim tự tháp:</p>
      <div class="academic-table-wrapper">
        <table class="academic-table">
          <tr><th>Cấp quản trị</th><th>Vị trí & Chức danh tiêu biểu</th><th>Nhiệm vụ & Vai trò cốt lõi</th><th>Loại quyết định chủ yếu</th></tr>
          <tr>
            <td><strong>Cấp cao (Top Managers)</strong></td>
            <td>Chủ tịch HĐQT, CEO, Tổng giám đốc, Phó TGĐ (CFO, COO)</td>
            <td>Xác định sứ mệnh, mục tiêu dài hạn, chiến lược phát triển tổng thể; chịu trách nhiệm cao nhất trước cổ đông và pháp luật.</td>
            <td>Quyết định <strong>Chiến lược</strong> (Dài hạn, rủi ro cao, bất định)</td>
          </tr>
          <tr>
            <td><strong>Cấp trung (Middle Managers)</strong></td>
            <td>Trưởng phòng ban (Kinh doanh, Kế toán, Nhân sự), Giám đốc chi nhánh, Quản đốc</td>
            <td>Là cầu nối truyền đạt mệnh lệnh; chuyển hóa chiến lược cấp cao thành kế hoạch trung hạn/ngắn hạn; điều phối nguồn lực liên bộ phận.</td>
            <td>Quyết định <strong>Chiến thuật</strong> (Trung hạn, phân bổ nguồn lực)</td>
          </tr>
          <tr>
            <td><strong>Cấp cơ sở (First-line Managers)</strong></td>
            <td>Tổ trưởng sản xuất, Trưởng nhóm (Team Leader), Giám sát ca, Cửa hàng trưởng</td>
            <td>Trực tiếp quản lý và hướng dẫn nhân viên thừa hành/công nhân; giám sát tiến độ và chất lượng sản phẩm từng giờ, từng ngày.</td>
            <td>Quyết định <strong>Tác nghiệp</strong> (Ngắn hạn, thường nhật, quy trình chuẩn)</td>
          </tr>
        </table>
      </div>
    `,
    example: "Tại tập đoàn Vingroup: Tỷ phú Phạm Nhật Vượng (Cấp cao - Chiến lược đầu tư xe điện toàn cầu); Giám đốc nhà máy VinFast Hải Phòng (Cấp trung - Điều phối dây chuyền sản xuất xe); Tổ trưởng ca dập khung vỏ xe (Cấp cơ sở - Giám sát công nhân kỹ thuật trong ca làm việc).",
    quiz: {
      question: "Cửa hàng trưởng một cửa hàng tiện lợi Circle K thuộc cấp quản trị nào?",
      options: [
        "A. Quản trị viên cấp cao",
        "B. Quản trị viên cấp trung",
        "C. Quản trị viên cấp cơ sở (tác nghiệp)",
        "D. Nhân viên thừa hành không có vai trò quản lý"
      ],
      answer: 2,
      explanation: "Cửa hàng trưởng trực tiếp giám sát, giao ca và hướng dẫn nhân viên thu ngân, phục vụ tại cửa hàng nên thuộc cấp cơ sở (First-line Manager)."
    }
  },
  {
    id: 5,
    chapter: 1,
    stage: 1,
    code: "C1.Q5",
    title: "Bốn chức năng quản trị cơ bản (P-O-L-C)",
    question: "Cho biết các chức năng quản trị cơ bản",
    keywords: ["Hoạch định (Planning)", "Tổ chức (Organizing)", "Lãnh đạo (Leading)", "Kiểm tra (Controlling)"],
    summary: [
      "Planning: Xác định mục tiêu và cách thức đạt được mục tiêu.",
      "Organizing: Thiết lập cơ cấu, phân công quyền hạn và nguồn lực.",
      "Leading: Động viên, truyền cảm hứng và giải quyết xung đột.",
      "Controlling: Đo lường kết quả, so sánh với kế hoạch và sửa sai."
    ],
    explanation: `
      <p>Quá trình quản trị được cấu thành bởi 4 chức năng liên hoàn khép kín theo chu trình <strong>P-O-L-C</strong>:</p>
      <ul>
        <li><strong>1. Hoạch định (Planning):</strong> Là chức năng đầu tiên, trả lời câu hỏi: <em>Làm cái gì? Khi nào làm? Ai làm? Làm như thế nào?</em>. Bao gồm việc xác định sứ mệnh, mục tiêu và các giải pháp hành động tốt nhất.</li>
        <li><strong>2. Tổ chức (Organizing):</strong> Xác định các công việc cần làm, gom nhóm công việc thành các phòng ban, phân bổ nguồn lực, thiết lập hệ thống quyền hạn và trách nhiệm để bộ máy vận hành trơn tru.</li>
        <li><strong>3. Lãnh đạo (Leading):</strong> Hướng dẫn, tạo động lực, truyền cảm hứng cho nhân viên, xây dựng văn hóa làm việc và giải quyết xung đột để phát huy tối đa tiềm năng con người.</li>
        <li><strong>4. Kiểm tra (Controlling):</strong> Theo dõi, đo lường kết quả thực hiện thực tế, so sánh đối chiếu với tiêu chuẩn kế hoạch, phát hiện sai lệch và đưa ra giải pháp điều chỉnh kịp thời.</li>
      </ul>
      <p><em>Mối quan hệ:</em> Hoạch định đặt ra tiêu chuẩn; Tổ chức chuẩn bị phương tiện; Lãnh đạo thúc đẩy con người; Kiểm tra bảo đảm mọi việc diễn ra đúng hướng.</p>
    `,
    example: "Mở quán trà sữa: Lập mục tiêu đạt 300 ly/ngày (Hoạch định) -> Tuyển 4 nhân viên và chia ca (Tổ chức) -> Khích lệ nhân viên vui vẻ với khách bằng tiền tip/thưởng (Lãnh đạo) -> Đếm số ly bán ra cuối ngày kiểm tra doanh thu (Kiểm tra).",
    quiz: {
      question: "Chức năng quản trị nào giữ vai trò làm cơ sở, thước đo tiêu chuẩn cho chức năng Kiểm tra?",
      options: [
        "A. Chức năng Lãnh đạo",
        "B. Chức năng Hoạch định",
        "C. Chức năng Tổ chức",
        "D. Chức năng Ủy quyền"
      ],
      answer: 1,
      explanation: "Hoạch định đề ra mục tiêu và tiêu chuẩn; nếu không có hoạch định thì kiểm tra sẽ không có chuẩn mực nào để so sánh và đánh giá sai lệch."
    }
  },
  {
    id: 6,
    chapter: 1,
    stage: 1,
    code: "C1.Q6",
    title: "Kỹ năng của nhà quản trị & Mối quan hệ với các cấp quản trị",
    question: "Các kỹ năng của nhà quản trị? Trình bày mối quan hệ giữa các cấp quản trị trong tổ chức với các kỹ năng quản trị?",
    keywords: ["Kỹ năng kỹ thuật (Technical)", "Kỹ năng nhân sự (Human)", "Kỹ năng tư duy (Conceptual)", "Mô hình Robert Katz"],
    summary: [
      "3 Kỹ năng: Kỹ thuật (chuyên môn cụ thể), Nhân sự (làm việc với con người), Tư duy (tầm nhìn tổng thể).",
      "Mối quan hệ: Kỹ năng nhân sự quan trọng ĐỀU NHAU ở cả 3 cấp; Tư duy quan trọng nhất ở cấp cao; Kỹ thuật quan trọng nhất ở cấp cơ sở."
    ],
    explanation: `
      <p>Theo mô hình kinh điển của <strong>Robert L. Katz</strong>, nhà quản trị cần có 3 kỹ năng cơ bản:</p>
      <ul>
        <li><strong>1. Kỹ năng kỹ thuật (Technical skills):</strong> Khả năng áp dụng các kiến thức chuyên môn, quy trình, kỹ thuật và công cụ nghiệp vụ cụ thể (lập trình, phân tích báo cáo tài chính, sửa chữa máy móc).</li>
        <li><strong>2. Kỹ năng nhân sự (Human skills):</strong> Khả năng làm việc, thấu hiểu, động viên, giao tiếp và giải quyết xung đột với cá nhân và tập thể.</li>
        <li><strong>3. Kỹ năng tư duy / nhận thức (Conceptual skills):</strong> Khả năng nhìn nhận tổ chức dưới góc độ tổng thể, phân tích mối quan hệ nhân quả phức tạp, dự báo xu hướng tương lai và ra quyết định chiến lược.</li>
      </ul>
      <div class="academic-table-wrapper">
        <table class="academic-table">
          <tr><th>Cấp quản trị</th><th>Kỹ năng Kỹ thuật</th><th>Kỹ năng Nhân sự</th><th>Kỹ năng Tư duy</th></tr>
          <tr><td><strong>Cấp cao</strong></td><td>Thấp nhất (15%)</td><td>Rất quan trọng (35%)</td><td><strong>Quan trọng nhất (50%)</strong></td></tr>
          <tr><td><strong>Cấp trung</strong></td><td>Trung bình (25%)</td><td><strong>Rất quan trọng (50%)</strong></td><td>Trung bình (25%)</td></tr>
          <tr><td><strong>Cấp cơ sở</strong></td><td><strong>Quan trọng nhất (50%)</strong></td><td>Rất quan trọng (35%)</td><td>Thấp nhất (15%)</td></tr>
        </table>
      </div>
      <p><em>Kết luận then chốt:</em> Kỹ năng nhân sự là kỹ năng duy nhất có tầm quan trọng tương đương và thiết yếu ở <strong>mọi cấp quản trị</strong>.</p>
    `,
    example: "CEO Apple (Tim Cook) không cần trực tiếp viết mã iOS (kỹ thuật thấp), nhưng cần tầm nhìn định hình chiến lược hệ sinh thái (tư duy cực cao) và khả năng đàm phán hợp đồng cung ứng toàn cầu (nhân sự xuất sắc).",
    quiz: {
      question: "Theo Robert Katz, kỹ năng nào có tầm quan trọng thiết yếu và tương đương nhau ở TẤT CẢ các cấp quản trị?",
      options: [
        "A. Kỹ năng kỹ thuật",
        "B. Kỹ năng tư duy",
        "C. Kỹ năng nhân sự",
        "D. Kỹ năng toán học"
      ],
      answer: 2,
      explanation: "Kỹ năng nhân sự (Human skills) là kỹ năng làm việc với và thông qua con người, bất kỳ nhà quản trị cấp nào cũng phải trực tiếp tiếp xúc, giao tiếp và thúc đẩy con người."
    }
  },
  {
    id: 7,
    chapter: 1,
    stage: 1,
    code: "C1.Q7",
    title: "10 vai trò của nhà quản trị (Henry Mintzberg)",
    question: "Cho biết 10 vai trò của nhà quản trị?",
    keywords: ["Mintzberg", "Quan hệ con người (3)", "Thông tin (3)", "Ra quyết định (4)"],
    summary: [
      "Nhóm Quan hệ (3): Đại diện, Lãnh đạo, Liên lạc.",
      "Nhóm Thông tin (3): Thu thập (giám sát), Phổ biến, Phát ngôn.",
      "Nhóm Quyết định (4): Doanh nhân, Giải quyết xáo trộn, Phân bổ nguồn lực, Đàm phán."
    ],
    explanation: `
      <p>Giáo sư <strong>Henry Mintzberg</strong> phân chia công việc của nhà quản trị thành 10 vai trò thuộc 3 nhóm lớn:</p>
      <div class="academic-table-wrapper">
        <table class="academic-table">
          <tr><th>Nhóm vai trò</th><th>Tên vai trò cụ thể</th><th>Hành động cụ thể</th></tr>
          <tr>
            <td rowspan="3"><strong>1. Quan hệ với con người (Interpersonal)</strong></td>
            <td><strong>Đại diện (Figurehead)</strong></td>
            <td>Thực hiện các nghi thức xã hội, cắt băng khánh thành, tiếp khách danh dự.</td>
          </tr>
          <tr><td><strong>Lãnh đạo (Leader)</strong></td><td>Động viên, tuyển dụng, đào tạo, định hướng cấp dưới.</td></tr>
          <tr><td><strong>Liên lạc (Liaison)</strong></td><td>Thiết lập mạng lưới quan hệ đối tác bên ngoài và các phòng ban nội bộ.</td></tr>
          <tr>
            <td rowspan="3"><strong>2. Thông tin (Informational)</strong></td>
            <td><strong>Thu thập/Giám sát (Monitor)</strong></td>
            <td>Tìm kiếm dữ liệu thị trường, báo cáo nội bộ, động thái đối thủ.</td>
          </tr>
          <tr><td><strong>Phổ biến (Disseminator)</strong></td><td>Truyền đạt thông tin quan trọng từ bên ngoài đến nhân viên cấp dưới.</td></tr>
          <tr><td><strong>Phát ngôn (Spokesperson)</strong></td><td>Đại diện cung cấp thông tin chính thức của công ty cho báo chí, công chúng.</td></tr>
          <tr>
            <td rowspan="4"><strong>3. Ra quyết định (Decisional)</strong></td>
            <td><strong>Doanh nhân (Entrepreneur)</strong></td>
            <td>Khởi xướng đổi mới sáng tạo, nắm bắt cơ hội kinh doanh mới.</td>
          </tr>
          <tr><td><strong>Giải quyết xáo trộn (Disturbance Handler)</strong></td><td>Xử lý khủng hoảng, đình công, giải quyết mâu thuẫn khẩn cấp.</td></tr>
          <tr><td><strong>Phân bổ nguồn lực (Resource Allocator)</strong></td><td>Quyết định ngân sách, thiết bị, nhân sự cho các dự án.</td></tr>
          <tr><td><strong>Đàm phán (Negotiator)</strong></td><td>Thương lượng hợp đồng với khách hàng, đối tác, nhà cung cấp.</td></tr>
        </table>
      </div>
    `,
    example: "Khi công ty xảy ra sự cố cháy nhà kho: Giám đốc đóng vai trò Giải quyết xáo trộn (chỉ đạo chữa cháy, cứu hàng), Phát ngôn (trả lời báo chí) và Phân bổ nguồn lực (cấp ngân sách khắc phục).",
    quiz: {
      question: "Vai trò nào sau đây thuộc nhóm vai trò 'Ra quyết định' của nhà quản trị theo Henry Mintzberg?",
      options: [
        "A. Đại diện (Figurehead)",
        "B. Doanh nhân (Entrepreneur)",
        "C. Phát ngôn (Spokesperson)",
        "D. Liên lạc (Liaison)"
      ],
      answer: 1,
      explanation: "Vai trò Doanh nhân (Entrepreneur) - dám đổi mới, khởi xướng dự án mới - thuộc nhóm vai trò Ra quyết định."
    }
  },
  {
    id: 8,
    chapter: 1,
    stage: 1,
    code: "C1.Q8",
    title: "Mối quan hệ giữa Cấp quản trị & Mức độ quyết định",
    question: "Mối quan hệ giữa cấp quản trị và mức độ của quyết định quản trị (QĐ chiến lược, chiến thuật, tác nghiệp)",
    keywords: ["QĐ Chiến lược - Cấp cao", "QĐ Chiến thuật - Cấp trung", "QĐ Tác nghiệp - Cấp cơ sở"],
    summary: [
      "Chiến lược: Dài hạn, toàn diện, bất định cao -> Do Cấp cao quyết định.",
      "Chiến thuật: Trung hạn, bộ phận, cụ thể hóa chiến lược -> Do Cấp trung quyết định.",
      "Tác nghiệp: Ngắn hạn, lặp đi lặp lại, thủ tục sẵn -> Do Cấp cơ sở quyết định."
    ],
    explanation: `
      <p>Cấp bậc quản trị quy định phạm vi quyền hạn và bản chất loại quyết định mà họ phải đưa ra:</p>
      <ul>
        <li><strong>1. Quyết định Chiến lược (Strategic Decisions):</strong>
          <ul>
            <li><em>Thuộc cấp:</em> <strong>Quản trị viên cấp cao</strong>.</li>
            <li><em>Đặc điểm:</em> Mang tính dài hạn (3-5 năm hoặc 10 năm), phạm vi bao trùm toàn bộ doanh nghiệp, giải quyết các bài toán về sứ mệnh, thị trường mới, cơ cấu tài chính lớn; mức độ rủi ro và bất định cực cao.</li>
          </ul>
        </li>
        <li><strong>2. Quyết định Chiến thuật (Tactical Decisions):</strong>
          <ul>
            <li><em>Thuộc cấp:</em> <strong>Quản trị viên cấp trung</strong>.</li>
            <li><em>Đặc điểm:</em> Mang tính trung hạn (6 tháng đến 1-2 năm), tập trung vào các phòng ban chức năng; cụ thể hóa quyết định chiến lược thành phân bổ ngân sách, kế hoạch marketing, nhân sự cho từng khối.</li>
          </ul>
        </li>
        <li><strong>3. Quyết định Tác nghiệp (Operational Decisions):</strong>
          <ul>
            <li><em>Thuộc cấp:</em> <strong>Quản trị viên cấp cơ sở</strong>.</li>
            <li><em>Đặc điểm:</em> Mang tính ngắn hạn (ngày, tuần, tháng), tính chất lặp đi lặp lại, áp dụng các quy trình tiêu chuẩn có sẵn; giải quyết sự vụ hàng ngày, độ chắc chắn cao.</li>
          </ul>
        </li>
      </ul>
    `,
    example: "HĐQT FPT quyết định đầu tư vào mảng AI (Chiến lược) -> Viện trưởng FPT Software lập kế hoạch tuyển 500 kỹ sư AI trong năm 2026 (Chiến thuật) -> Trưởng nhóm kỹ thuật phân công lập trình viên viết module thuật toán hàng tuần (Tác nghiệp).",
    quiz: {
      question: "Quyết định phê duyệt việc mở rộng thị trường sang 3 quốc gia Đông Nam Á trong 5 năm tới là loại quyết định nào và do cấp nào đưa ra?",
      options: [
        "A. Quyết định tác nghiệp - Cấp cơ sở",
        "B. Quyết định chiến thuật - Cấp trung",
        "C. Quyết định chiến lược - Cấp cao",
        "D. Quyết định hành chính - Nhân viên thừa hành"
      ],
      answer: 2,
      explanation: "Mở rộng thị trường quốc tế trong 5 năm mang tính dài hạn, rủi ro lớn, định hình tương lai toàn công ty nên là Quyết định chiến lược của cấp cao."
    }
  },
  {
    id: 9,
    chapter: 1,
    stage: 1,
    code: "C1.Q9",
    title: "Tại sao nói Quản trị là một Khoa học?",
    question: "Tại sao nói quản trị là một khoa học?",
    keywords: ["Hệ thống lý luận", "Quy luật khách quan", "Phương pháp nghiên cứu", "Tính dự báo"],
    summary: [
      "Có đối tượng nghiên cứu độc lập (các quan hệ quản trị).",
      "Dựa trên các nguyên lý, quy luật khách quan đã được chứng minh qua thực tiễn.",
      "Sử dụng các phương pháp khoa học logic (toán học, thống kê, phân tích dữ liệu).",
      "Có khả năng dự báo xu hướng để ra quyết định."
    ],
    explanation: `
      <p>Quản trị được công nhận là một ngành khoa học vì hội tụ đầy đủ các tiêu chuẩn khoa học:</p>
      <ul>
        <li><strong>Có đối tượng nghiên cứu xác định:</strong> Nghiên cứu các quy luật, nguyên tắc và phương pháp phối hợp các nguồn lực nhằm đạt hiệu quả tối ưu trong tổ chức.</li>
        <li><strong>Có hệ thống lý thuyết và khái niệm chuẩn mực:</strong> Được xây dựng và đúc kết qua hàng thế kỷ từ các trường phái quản trị cổ điển (Taylor, Fayol), trường phái tâm lý - xã hội (Elton Mayo), đến lý thuyết định lượng và lý thuyết hệ thống hiện đại.</li>
        <li><strong>Tuân theo các quy luật khách quan:</strong> Hoạt động quản trị chịu sự chi phối của quy luật kinh tế (cung - cầu, cạnh tranh), quy luật tâm lý xã hội (tháp nhu cầu, động lực con người). Bỏ qua các quy luật này tổ chức sẽ thất bại.</li>
        <li><strong>Ứng dụng các công cụ và phương pháp khoa học:</strong> Sử dụng toán học, mô hình hóa dữ liệu, lý thuyết xác suất, sơ đồ Gantt, phân tích tài chính để tối ưu hóa quyết định.</li>
      </ul>
    `,
    example: "Doanh nghiệp không định giá sản phẩm bừa bãi mà áp dụng công thức kinh tế học tính toán Điểm hòa vốn (Break-even point) và độ co giãn của cầu theo giá một cách chuẩn xác.",
    quiz: {
      question: "Tính khoa học của quản trị đòi hỏi nhà quản trị phải làm gì?",
      options: [
        "A. Chỉ dựa hoàn toàn vào cảm tính và trực giác cá nhân",
        "B. Nắm vững và vận dụng đúng đắn các quy luật khách quan, nguyên lý quản trị và dữ liệu thực tế",
        "C. Áp dụng máy móc một công thức cho mọi tình huống mà không thay đổi",
        "D. Bắt buộc phải có bằng tiến sĩ mới được làm quản lý"
      ],
      answer: 1,
      explanation: "Tính khoa học đòi hỏi phải có tri thức lý luận vững chắc, tuân theo quy luật khách quan và căn cứ vào dữ liệu logic, không duy ý chí."
    }
  },
  {
    id: 10,
    chapter: 1,
    stage: 1,
    code: "C1.Q10",
    title: "Tính Nghệ thuật trong Quản trị tổ chức",
    question: "Tính nghệ thuật trong quản trị tổ chức thể hiện như thế nào?",
    keywords: ["Nghệ thuật dùng người", "Trực giác & Kinh nghiệm", "Tùy cơ ứng biến", "Truyền cảm hứng"],
    summary: [
      "Xuất phát từ đối tượng quản trị là con người có cảm xúc và môi trường biến đổi liên tục.",
      "Thể hiện ở: Dụng nhân như dụng mộc, nhạy bén nắm bắt thời cơ, linh hoạt 'Dĩ bất biến, ứng vạn biến', giải quyết xung đột khéo léo."
    ],
    explanation: `
      <p>Nếu Khoa học là "biết để làm" thì Nghệ thuật là "làm thế nào cho khéo". Tính nghệ thuật thể hiện ở:</p>
      <ul>
        <li><strong>Nghệ thuật dùng người (Dụng nhân như dụng mộc):</strong> Nhìn thấu điểm mạnh, điểm yếu của từng người, bố trí đúng vị trí sở trường, khơi gợi lòng nhiệt huyết và niềm tự hào của nhân viên.</li>
        <li><strong>Tính linh hoạt và sáng tạo (Tùy cơ ứng biến):</strong> Không có một công thức quản trị nào đúng cho mọi công ty. Nhà quản trị giỏi biết biến hóa phương pháp tùy theo bối cảnh, văn hóa và con người cụ thể ("Dĩ bất biến, ứng vạn biến").</li>
        <li><strong>Trực giác nhạy bén trong môi trường bất định:</strong> Khi dữ liệu chưa đầy đủ hoặc trong cơn khủng hoảng, bản lĩnh và trực giác kinh doanh tích lũy từ kinh nghiệm thực tiễn giúp nhà quản trị chớp thời cơ vàng.</li>
        <li><strong>Nghệ thuật giao tiếp, thuyết phục và truyền lửa:</strong> Biến những mệnh lệnh khô khan thành động lực cống hiến tự nguyện của tập thể.</li>
      </ul>
    `,
    example: "Cùng một lỗi vi phạm đi làm trễ, nhà quản lý cứng nhắc sẽ trừ lương ngay (khoa học quy chế); nhưng nhà quản lý có nghệ thuật sẽ tìm hiểu xem nhân viên có gặp biến cố gia đình không để vừa giữ kỷ luật vừa thu phục được lòng người.",
    quiz: {
      question: "Yếu tố nào sau đây quyết định nhiều nhất đến tính NGHỆ THUẬT trong quản trị?",
      options: [
        "A. Việc đầu tư vào hệ thống máy tính cấu hình cao",
        "B. Tính độc nhất, đa dạng về tâm lý của con người và sự biến động khôn lường của môi trường thực tiễn",
        "C. Các công thức tính toán tài chính kế toán cố định",
        "D. Việc sao chép 100% mô hình của đối thủ cạnh tranh"
      ],
      answer: 1,
      explanation: "Con người không phải cỗ máy và hoàn cảnh thực tế luôn biến động khôn lường, đòi hỏi sự khéo léo, trực giác và tài ứng biến của nhà quản trị."
    }
  },
  {
    id: 11,
    chapter: 1,
    stage: 1,
    code: "C1.Q11",
    title: "Quản trị: Một Nghề, Một Khoa học và Một Nghệ thuật",
    question: "Tại sao quản trị tổ chức được coi là một nghề, một khoa học và mang tính nghệ thuật?",
    keywords: ["Một Nghề chuyên nghiệp", "Khoa học (Xương sống)", "Nghệ thuật (Linh hồn)", "Sự giao thoa hoàn hảo"],
    summary: [
      "Khoa học: Cung cấp nền tảng lý luận, phương pháp logic.",
      "Nghệ thuật: Kỹ năng vận dụng uyển chuyển, thấu hiểu con người.",
      "Một Nghề: Đòi hỏi đào tạo chuyên nghiệp (MBA), có quy chuẩn đạo đức, tách rời quyền sở hữu với quyền quản lý."
    ],
    explanation: `
      <p>Quản trị học hiện đại là sự hội tụ tam giác vàng: <strong>Khoa học - Nghệ thuật - Nghề nghiệp</strong>:</p>
      <ul>
        <li><strong>1. Là một Khoa học:</strong> Đóng vai trò là "bộ xương" nền tảng, trang bị kiến thức bài bản về nguyên lý, quy luật, công cụ quản trị định lượng để tránh làm việc mò mẫm, cảm tính.</li>
        <li><strong>2. Mang tính Nghệ thuật:</strong> Đóng vai trò là "thịt da, linh hồn", giúp nhà quản trị thổi hồn vào các quy trình khô cứng, biết cách đối nhân xử thế, biến nguy thành cơ trong thực tiễn đa chiều.</li>
        <li><strong>3. Được coi là một Nghề chuyên nghiệp (Professionalism):</strong>
          <ul>
            <li><em>Đòi hỏi đào tạo bài bản:</em> Có hệ thống trường lớp chuyên đào tạo cử nhân, thạc sĩ quản trị kinh doanh (BBA, MBA).</li>
            <li><em>Tách rời sở hữu và điều hành:</em> Các cổ đông (chủ sở hữu) thuê CEO chuyên nghiệp để vận hành doanh nghiệp.</li>
            <li><em>Có quy chuẩn đạo đức nghề nghiệp:</em> Nhà quản trị chịu trách nhiệm trước xã hội, bảo vệ quyền lợi người lao động và khách hàng.</li>
            <li><em>Lấy hoạt động quản trị làm nghề sinh sống và phát triển sự nghiệp lâu dài.</em></li>
          </ul>
        </li>
      </ul>
    `,
    example: "CEO thuê ngoài tại các ngân hàng lớn (như Vietcombank, Techcombank): Họ có bằng cấp chuyên môn cao (khoa học), ứng biến điều hành tỷ giá và nhân sự khéo léo (nghệ thuật) và được trả lương hàng tỷ đồng cho nghề điều hành quản trị chuyên nghiệp (nghề nghiệp).",
    quiz: {
      question: "Đặc điểm nào chứng minh Quản trị ngày nay đã trở thành 'Một Nghề' chuyên nghiệp trong xã hội?",
      options: [
        "A. Chỉ có chủ sở hữu góp vốn mới được quyền điều hành công ty",
        "B. Có sự tách rời giữa quyền sở hữu và quyền điều hành, đòi hỏi đào tạo bài bản và có chuẩn mực đạo đức riêng",
        "C. Quản trị không cần học hành mà chỉ cần may mắn",
        "D. Ai cũng có thể làm giám đốc mà không cần kỹ năng gì"
      ],
      answer: 1,
      explanation: "Sự xuất hiện của đội ngũ CEO chuyên nghiệp, được đào tạo bài bản (MBA) và được thuê điều hành công ty minh chứng quản trị là một nghề độc lập."
    }
  },
  {
    id: 12,
    chapter: 1,
    stage: 1,
    code: "C1.Q12",
    title: "Các nhân tố thuộc Môi trường bên trong Doanh nghiệp",
    question: "Cho biết từng nhân tố thuộc môi trường bên trong doanh nghiệp?",
    keywords: ["Môi trường nội bộ", "Kiểm soát được", "Điểm mạnh (S)", "Điểm yếu (W)", "6 Nguồn lực"],
    summary: [
      "Đặc tính: Là các yếu tố nằm bên trong tổ chức, doanh nghiệp CÓ THỂ KIỂM SOÁT ĐƯỢC.",
      "Quyết định Điểm mạnh (S) và Điểm yếu (W) của doanh nghiệp.",
      "Bao gồm: Nhân lực, Tài chính, Cơ sở vật chất/Công nghệ, Văn hóa doanh nghiệp, Marketing/R&D, Năng lực quản trị."
    ],
    explanation: `
      <p>Môi trường bên trong bao gồm các yếu tố nội tại của tổ chức mà nhà quản trị <strong>có thể kiểm soát và chủ động thay đổi</strong>:</p>
      <ul>
        <li><strong>1. Nguồn nhân lực (Human Resources):</strong> Số lượng, trình độ tay nghề, kinh nghiệm, lòng trung thành, năng suất lao động và tinh thần kỷ luật của cán bộ công nhân viên.</li>
        <li><strong>2. Năng lực tài chính (Financial Resources):</strong> Quy mô vốn, khả năng huy động vốn, tỷ lệ nợ, dòng tiền mặt, khả năng sinh lời và mức độ an toàn tài chính.</li>
        <li><strong>3. Cơ sở vật chất & Công nghệ (Physical & Tech):</strong> Hệ thống máy móc, dây chuyền sản xuất, nhà xưởng, bản quyền sở hữu trí tuệ, mức độ ứng dụng chuyển đổi số/AI.</li>
        <li><strong>4. Văn hóa doanh nghiệp (Corporate Culture):</strong> Hệ thống giá trị cốt lõi, niềm tin, phong cách ứng xử và quy tắc đạo đức định hình nên bản sắc riêng của công ty.</li>
        <li><strong>5. Năng lực Nghiên cứu & Phát triển (R&D):</strong> Khả năng sáng tạo sản phẩm mới, cải tiến quy trình công nghệ để tạo ưu thế cạnh tranh.</li>
        <li><strong>6. Marketing & Thương hiệu:</strong> Danh tiếng thương hiệu, mạng lưới kênh phân phối, mối quan hệ khách hàng và chính sách giá.</li>
        <li><strong>7. Bộ máy tổ chức & Năng lực quản trị:</strong> Cơ cấu tổ chức tinh gọn hay cồng kềnh, trình độ của đội ngũ lãnh đạo.</li>
      </ul>
    `,
    example: "Hệ thống văn hóa 'Tận tâm phục vụ khách hàng' và phần mềm quản lý kho vận vượt trội của Thế Giới Di Động là những yếu tố môi trường bên trong tạo nên thế mạnh cạnh tranh.",
    quiz: {
      question: "Nhân tố nào sau đây KHÔNG THUỘC môi trường bên trong của doanh nghiệp?",
      options: [
        "A. Trình độ chuyên môn của đội ngũ nhân viên",
        "B. Tốc độ tăng trưởng GDP của nền kinh tế quốc gia",
        "C. Văn hóa ứng xử và giá trị cốt lõi công ty",
        "D. Khả năng thanh toán và dòng tiền luân chuyển"
      ],
      answer: 1,
      explanation: "Tốc độ tăng trưởng GDP thuộc môi trường kinh tế vĩ mô bên ngoài, doanh nghiệp không thể kiểm soát được."
    }
  },
  {
    id: 13,
    chapter: 1,
    stage: 1,
    code: "C1.Q13",
    title: "Môi trường bên ngoài Doanh nghiệp (Vĩ mô & Vi mô)",
    question: "Cho biết từng nhân tố thuộc môi trường bên ngoài doanh nghiệp? (Môi trường vĩ mô & Môi trường vi mô)",
    keywords: ["PESTEL (Vĩ mô)", "5 Lực lượng Porter (Vi mô)", "Không kiểm soát được", "Cơ hội (O) & Thách thức (T)"],
    summary: [
      "Đặc tính: Nằm ngoài doanh nghiệp, KHÔNG THỂ KIỂM SOÁT ĐƯỢC, tạo ra Cơ hội (O) và Thách thức (T).",
      "Vĩ mô (PESTEL - Tác động gián tiếp): Chính trị - Pháp luật, Kinh tế, Văn hóa - Xã hội, Tự nhiên, Công nghệ, Toàn cầu.",
      "Vi mô / Ngành (Porter - Tác động trực tiếp): Khách hàng, Đối thủ hiện tại, Đối thủ tiềm ẩn, Nhà cung cấp, Sản phẩm thay thế."
    ],
    explanation: `
      <p>Môi trường bên ngoài quyết định sự sống còn của doanh nghiệp, gồm 2 tầng cấp độ:</p>
      <div class="academic-table-wrapper">
        <table class="academic-table">
          <tr><th>Cấp độ môi trường</th><th>Các nhân tố cụ thể</th><th>Đặc điểm & Tác động</th></tr>
          <tr>
            <td><strong>Môi trường Vĩ mô (Macro - Chung)<br><em>Mô hình PESTEL</em></strong></td>
            <td>
              1. <strong>Chính trị - Pháp luật:</strong> Sự ổn định chính trị, luật thuế, luật doanh nghiệp.<br>
              2. <strong>Kinh tế:</strong> GDP, lạm phát, lãi suất, tỷ giá hối đoái.<br>
              3. <strong>Văn hóa - Xã hội:</strong> Tháp dân số trẻ/già, phong cách sống, thị hiếu tiêu dùng.<br>
              4. <strong>Tự nhiên:</strong> Biến đổi khí hậu, vị trí địa lý, tài nguyên thiên nhiên.<br>
              5. <strong>Công nghệ:</strong> Sự bùng nổ của AI, Internet, tự động hóa.<br>
              6. <strong>Quốc tế / Toàn cầu:</strong> Hiệp định thương mại tự do (EVFTA, CPTPP), xung đột quốc tế.
            </td>
            <td>Tác động <strong>gián tiếp</strong> và rộng lớn đến <strong>tất cả các ngành</strong> trong nền kinh tế. Doanh nghiệp chỉ có thể dự báo để thích ứng.</td>
          </tr>
          <tr>
            <td><strong>Môi trường Vi mô (Micro - Ngành)<br><em>5 Lực lượng M. Porter</em></strong></td>
            <td>
              1. <strong>Khách hàng:</strong> Sức ép đòi giảm giá, nâng cao dịch vụ.<br>
              2. <strong>Đối thủ cạnh tranh hiện tại:</strong> Cuộc chiến giành thị phần, khuyến mãi, quảng cáo.<br>
              3. <strong>Đối thủ tiềm ẩn:</strong> Các công ty mới có thể gia nhập ngành.<br>
              4. <strong>Nhà cung cấp:</strong> Sức ép tăng giá nguyên liệu đầu vào.<br>
              5. <strong>Sản phẩm thay thế:</strong> Mặt hàng khác ngành nhưng thỏa mãn cùng nhu cầu (VD: xe buýt điện thay thế xe máy xăng).
            </td>
            <td>Tác động <strong>trực tiếp, tức thì</strong> và cụ thể đến các doanh nghiệp trong <strong>cùng một ngành kinh doanh</strong>.</td>
          </tr>
        </table>
      </div>
    `,
    example: "Khi Ngân hàng Nhà nước tăng lãi suất điều hành (Yếu tố kinh tế vĩ mô), lập tức chi phí vay vốn tăng cao; đồng thời các đối thủ trong ngành hạ giá bán (Yếu tố vi mô) buộc công ty phải thắt chặt chi tiêu.",
    quiz: {
      question: "Nhân tố nào sau đây thuộc môi trường VI MÔ (môi trường ngành) của một hãng hàng không?",
      options: [
        "A. Tỷ lệ lạm phát cả nước",
        "B. Luật hàng không dân dụng mới ban hành",
        "C. Sự cạnh tranh quyết liệt về giá vé giữa Vietnam Airlines và Vietjet Air",
        "D. Xu hướng dân số già hóa trong 30 năm tới"
      ],
      answer: 2,
      explanation: "Sự cạnh tranh giữa các hãng bay trong cùng ngành là đối thủ cạnh tranh hiện tại, thuộc môi trường vi mô (ngành)."
    }
  }
];
