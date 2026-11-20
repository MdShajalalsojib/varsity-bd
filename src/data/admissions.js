export const universities = [
  { id: 'du', short: 'DU', name: 'ঢাকা বিশ্ববিদ্যালয়', english: 'University of Dhaka', units: ['ক', 'খ', 'গ', 'ঘ', 'চ'], color: 'purple', emblem: 'ঢা' },
  { id: 'ru', short: 'RU', name: 'রাজশাহী বিশ্ববিদ্যালয়', english: 'University of Rajshahi', units: ['A', 'B', 'C'], color: 'gold', emblem: 'রা' },
  { id: 'cu', short: 'CU', name: 'চট্টগ্রাম বিশ্ববিদ্যালয়', english: 'University of Chittagong', units: ['A', 'B', 'C', 'D'], color: 'ink', emblem: 'চ' },
  { id: 'ju', short: 'JU', name: 'জাহাঙ্গীরনগর বিশ্ববিদ্যালয়', english: 'Jahangirnagar University', units: ['A', 'B', 'C', 'D', 'E'], color: 'blue', emblem: 'জা' },
  { id: 'buet', short: 'BUET', name: 'বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয়', english: 'Bangladesh University of Engineering', units: ['ইঞ্জিনিয়ারিং'], color: 'red', emblem: 'বু' },
  { id: 'bau', short: 'BAU', name: 'কৃষি বিশ্ববিদ্যালয়', english: 'Bangladesh Agricultural University', units: ['কৃষি'], color: 'green', emblem: 'কৃ' },
  { id: 'sust', short: 'SUST', name: 'শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়', english: 'Shahjalal University of Science & Technology', units: ['A', 'B'], color: 'teal', emblem: 'শা' },
  { id: 'ku', short: 'KU', name: 'খুলনা বিশ্ববিদ্যালয়', english: 'Khulna University', units: ['A', 'B', 'C', 'D'], color: 'orange', emblem: 'খু' },
  { id: 'jnu', short: 'JnU', name: 'জগন্নাথ বিশ্ববিদ্যালয়', english: 'Jagannath University', units: ['A', 'B', 'C', 'D', 'E'], color: 'blue', emblem: 'জ' },
  { id: 'gst', short: 'GST', name: 'অন্যান্য পাবলিক বিশ্ববিদ্যালয়', english: 'Cluster admission & more', units: ['গুচ্ছ'], color: 'navy', emblem: '✦' },
]

export const exams = [
  { id: 'du-ka', universityId: 'du', university: 'ঢাকা বিশ্ববিদ্যালয়', unit: 'ক ইউনিট', title: 'বিজ্ঞান বিভাগ · মডেল টেস্ট ০১', subjects: 'পদার্থবিজ্ঞান · রসায়ন · গণিত', questions: 50, minutes: 60, marks: 100, negative: 0.25, level: 'ভর্তি প্রস্তুতি', tag: 'জনপ্রিয়', color: 'blue' },
  { id: 'buet-prep', universityId: 'buet', university: 'বুয়েট', unit: 'প্রাক-নির্বাচনী', title: 'ইঞ্জিনিয়ারিং প্রস্তুতি · সেট ০১', subjects: 'গণিত · পদার্থবিজ্ঞান · রসায়ন', questions: 50, minutes: 75, marks: 150, negative: 0.25, level: 'চ্যালেঞ্জিং', tag: 'নতুন', color: 'green' },
  { id: 'ju-ka', universityId: 'ju', university: 'জাহাঙ্গীরনগর বিশ্ববিদ্যালয়', unit: 'A ইউনিট', title: 'গাণিতিক ও পদার্থ বিষয়াবলি', subjects: 'গণিত · পদার্থবিজ্ঞান · রসায়ন', questions: 50, minutes: 60, marks: 80, negative: 0.2, level: 'মাঝারি', tag: 'আপডেট', color: 'orange' },
]

export const questions = [
  { subject: 'পদার্থবিজ্ঞান', text: 'একটি বস্তুর বেগ দ্বিগুণ করলে তার গতিশক্তি কত গুণ হবে?', options: ['দুই গুণ', 'চার গুণ', 'আট গুণ', 'অপরিবর্তিত'], answer: 1, explanation: 'গতিশক্তি, K = ½mv²। বেগ দ্বিগুণ হলে গতিশক্তি চার গুণ হয়।' },
  { subject: 'রসায়ন', text: 'STP-তে এক মোল আদর্শ গ্যাসের আয়তন কত?', options: ['১১.২ লিটার', '২২.৪ লিটার', '২৪.০ লিটার', '৪৪.৮ লিটার'], answer: 1, explanation: '০°C ও ১ atm চাপে এক মোল আদর্শ গ্যাসের আয়তন ২২.৪ লিটার।' },
  { subject: 'গণিত', text: 'যদি x² − ৫x + ৬ = ০ হয়, তবে x-এর মান কোনটি?', options: ['১, ৬', '−২, −৩', '২, ৩', '−১, −৬'], answer: 2, explanation: 'x² − ৫x + ৬ = (x − ২)(x − ৩); সুতরাং x = ২ অথবা ৩।' },
  { subject: 'জীববিজ্ঞান', text: 'কোষের শক্তিঘর বলা হয় কোন অঙ্গাণুকে?', options: ['রাইবোসোম', 'গলজি বডি', 'লাইসোজোম', 'মাইটোকন্ড্রিয়া'], answer: 3, explanation: 'মাইটোকন্ড্রিয়ায় কোষীয় শ্বসনের মাধ্যমে অধিকাংশ ATP তৈরি হয়।' },
  { subject: 'পদার্থবিজ্ঞান', text: 'শূন্যস্থানে আলোর বেগ প্রায় কত?', options: ['৩ × ১০⁶ m/s', '৩ × ১০⁸ m/s', '৩ × ১০¹⁰ m/s', '৩ × ১০⁵ m/s'], answer: 1, explanation: 'শূন্যস্থানে আলোর বেগ c ≈ ৩ × ১০⁸ মিটার/সেকেন্ড।' },
  { subject: 'রসায়ন', text: 'নিচের কোনটির pH মান ৭-এর কম?', options: ['বিশুদ্ধ পানি', 'সোডিয়াম হাইড্রোক্সাইড', 'হাইড্রোক্লোরিক অ্যাসিড', 'অ্যামোনিয়া দ্রবণ'], answer: 2, explanation: 'অম্লীয় দ্রবণের pH মান ৭-এর কম হয়।' },
  { subject: 'গণিত', text: 'sin ৩০° এর মান কত?', options: ['০', '১/২', '√৩/২', '১'], answer: 1, explanation: 'ত্রিকোণমিতির standard মান অনুযায়ী sin ৩০° = ১/২।' },
  { subject: 'জীববিজ্ঞান', text: 'DNA-এর পূর্ণরূপ কী?', options: ['ডিওক্সিরাইবোনিউক্লিক অ্যাসিড', 'ডাই-নাইট্রোজেন অ্যাসিড', 'ডাবল নিউক্লিয়ার অ্যাটম', 'ডি-রাইবোজ নিউক্লিয়ার অ্যাসিড'], answer: 0, explanation: 'DNA হলো Deoxyribonucleic acid—বংশগত তথ্য বহনকারী অণু।' },
  { subject: 'পদার্থবিজ্ঞান', text: 'ওহমের সূত্রে বিভব পার্থক্য V-এর সমীকরণ কোনটি?', options: ['V = IR', 'V = I/R', 'V = R/I', 'V = I + R'], answer: 0, explanation: 'ওহমের সূত্র অনুযায়ী নির্দিষ্ট তাপমাত্রায় V = IR।' },
  { subject: 'রসায়ন', text: 'পানির রাসায়নিক সংকেত কোনটি?', options: ['HO₂', 'H₂O', 'H₂O₂', 'OH'], answer: 1, explanation: 'পানির প্রতিটি অণুতে দুটি হাইড্রোজেন ও একটি অক্সিজেন পরমাণু থাকে।' },
]

export function getAttempts() {
  try { return JSON.parse(localStorage.getItem('varsityx-attempts') || '[]') } catch { return [] }
}
