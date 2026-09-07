// import React, { useState } from 'react';

// /* ------------------------------------------------------------------ */
// /*  Dashboard — Retro-notebook productivity dashboard                  */
// /*  Mirrors stitch_pace_retro_productivity_login/pace_dashboard/code.html
//     Uses CSS variables defined in index.css & test/ design system       */
// /* ------------------------------------------------------------------ */

// /* ---------- tiny sub-components ---------- */

// const Badge: React.FC<{
//   bg?: string;
//   border?: string;
//   color?: string;
//   children: React.ReactNode;
// }> = ({
//   bg = 'var(--pace-paper-dark)',
//   border = 'var(--pace-ink-deep)',
//   color = 'var(--pace-ink-deep)',
//   children,
// }) => (
//   <span
//     style={{
//       display: 'inline-flex',
//       alignItems: 'center',
//       gap: 4,
//       padding: '2px 8px',
//       fontFamily: 'var(--pace-font-mono)',
//       fontSize: 'var(--pace-font-label-small-size)',
//       fontWeight: 700,
//       letterSpacing: '0.05em',
//       textTransform: 'uppercase' as const,
//       border: `2px solid ${border}`,
//       borderRadius: 'var(--pace-radius-sm, 0.25rem)',
//       lineHeight: 1.4,
//       whiteSpace: 'nowrap' as const,
//       backgroundColor: bg,
//       color,
//     }}
//   >
//     {children}
//   </span>
// );

// const MaterialIcon: React.FC<{
//   name: string;
//   size?: number | string;
//   fill?: boolean;
//   style?: React.CSSProperties;
// }> = ({ name, size = 24, fill = false, style }) => (
//   <span
//     className="material-symbols-outlined"
//     style={{
//       fontSize: size,
//       fontVariationSettings: fill
//         ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
//         : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
//       lineHeight: 1,
//       ...style,
//     }}
//   >
//     {name}
//   </span>
// );

// /* ---------- shared styles ---------- */

// const chunkyBorder: React.CSSProperties = {
//   border: '2px solid var(--pace-ink-deep)',
// };

// const hardShadow: React.CSSProperties = {
//   boxShadow: '4px 4px 0px 0px var(--pace-ink-deep)',
// };

// const chipBtn: React.CSSProperties = {
//   ...chunkyBorder,
//   ...hardShadow,
//   transition: 'transform 0.1s ease, box-shadow 0.1s ease',
//   cursor: 'pointer',
// };

// /* ---------- main component ---------- */

// const Dashboard = () => {
//   const [newTask, setNewTask] = useState('');

//   /* ----- static data (replace with real state later) ----- */
//   const tasks = [
//     {
//       id: 1,
//       title: 'Review Q3 Analytics Report',
//       tag: 'Marketing',
//       tagBg: 'var(--pace-blue)',
//       priority: null,
//       done: false,
//     },
//     {
//       id: 2,
//       title: 'Team Sync: Sprint Planning',
//       tag: 'Engineering',
//       tagBg: 'var(--pace-green)',
//       priority: null,
//       done: true,
//     },
//     {
//       id: 3,
//       title: 'Draft API Documentation',
//       tag: 'Engineering',
//       tagBg: 'var(--pace-green)',
//       priority: 'High',
//       done: false,
//     },
//     {
//       id: 4,
//       title: 'Update User Persona Deck',
//       tag: 'Design',
//       tagBg: 'var(--pace-blue)',
//       priority: null,
//       done: false,
//     },
//   ];

//   const [taskState, setTaskState] = useState(
//     tasks.reduce<Record<number, boolean>>((acc, t) => {
//       acc[t.id] = t.done;
//       return acc;
//     }, {}),
//   );

//   const toggleTask = (id: number) =>
//     setTaskState((prev) => ({ ...prev, [id]: !prev[id] }));

//   const schedule = [
//     { time: '09:00 - 11:30', label: 'Deep Work: Design', active: true },
//     { time: '11:30 - 12:00', label: 'Email & Slack Sync', active: false },
//     { time: '12:00 - 13:00', label: 'Lunch Break', active: false, italic: true },
//   ];

//   const habits = [
//     { name: 'Water (2L)', circles: [true, true, false] },
//     { name: 'Meditate', done: true },
//     { name: 'Read (30m)', done: false },
//   ];

//   /* ===================== RENDER ===================== */
//   return (
//     <div
//       style={{
//         flex: 1,
//         overflowY: 'auto',
//         padding: 'var(--pace-font-head1-size, 40px)',
//         fontFamily: 'var(--pace-font-body)',
//         color: 'var(--pace-ink-deep)',
//         minHeight: '100%',
//       }}
//     >
//       <div
//         style={{
//           maxWidth: 1200,
//           margin: '0 auto',
//           display: 'flex',
//           flexDirection: 'column',
//           gap: 'var(--pace-font-head1-size, 40px)',
//           paddingBottom: 'var(--pace-font-head1-size, 40px)',
//         }}
//       >
//         {/* ===== HEADER ===== */}
//         <div
//           style={{
//             display: 'flex',
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             alignItems: 'flex-end',
//             gap: 16,
//             marginBottom: 32,
//             flexWrap: 'wrap',
//           }}
//         >
//           <h2
//             style={{
//               fontFamily: 'var(--pace-font-display)',
//               fontSize: 'clamp(32px, 5vw, 56px)',
//               fontWeight: 900,
//               lineHeight: 1.1,
//               letterSpacing: '-0.02em',
//               color: 'var(--pace-ink-deep)',
//               margin: 0,
//             }}
//           >
//             Good morning, Alex.
//           </h2>

//           {/* date sticker */}
//           <div
//             style={{
//               backgroundColor: 'var(--pace-yellow)',
//               padding: '8px 16px',
//               borderRadius: 'var(--pace-radius-sm, 0.25rem)',
//               ...chunkyBorder,
//               ...hardShadow,
//               transform: 'rotate(-2deg)',
//               width: 'fit-content',
//             }}
//           >
//             <span
//               style={{
//                 fontFamily: 'var(--pace-font-mono)',
//                 fontSize: 14,
//                 fontWeight: 700,
//                 letterSpacing: '0.05em',
//                 textTransform: 'uppercase',
//                 color: 'var(--pace-ink-deep)',
//               }}
//             >
//               Oct 24, 1998
//             </span>
//           </div>
//         </div>

//         {/* ===== DASHBOARD GRID ===== */}
//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(12, 1fr)',
//             gap: 'var(--pace-font-head1-size, 24px)',
//           }}
//         >
//           {/* ---- LEFT COLUMN (8 cols) ---- */}
//           <div
//             style={{
//               gridColumn: 'span 8',
//               display: 'flex',
//               flexDirection: 'column',
//               gap: 'var(--pace-font-head1-size, 24px)',
//             }}
//           >
//             {/* --- MIT Card --- */}
//             <section
//               style={{
//                 backgroundColor: 'var(--pace-paper-dark)',
//                 borderRadius: 'var(--pace-radius-lg, 0.75rem)',
//                 ...chunkyBorder,
//                 ...hardShadow,
//                 padding: 24,
//                 position: 'relative',
//                 overflow: 'hidden',
//               }}
//             >
//               {/* star doodle */}
//               <svg
//                 style={{
//                   position: 'absolute',
//                   top: 16,
//                   right: 16,
//                   width: 32,
//                   height: 32,
//                   color: 'var(--pace-red)',
//                   opacity: 0.8,
//                 }}
//                 fill="none"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//               </svg>

//               <div style={{ marginBottom: 16 }}>
//                 <Badge bg="var(--pace-red)" color="var(--pace-paper-base)" border="var(--pace-red)">
//                   Most Important Task
//                 </Badge>
//               </div>

//               <h3
//                 style={{
//                   fontFamily: 'var(--pace-font-display)',
//                   fontSize: 'var(--pace-font-head2-size, 32px)',
//                   fontWeight: 700,
//                   lineHeight: 1.2,
//                   marginBottom: 8,
//                   color: 'var(--pace-ink-deep)',
//                 }}
//               >
//                 Finalize Brand Guidelines
//               </h3>

//               <p
//                 style={{
//                   fontFamily: 'var(--pace-font-body)',
//                   fontSize: 'var(--pace-font-body-size, 16px)',
//                   lineHeight: 1.5,
//                   color: 'var(--pace-ink-deep)',
//                   opacity: 0.65,
//                   marginBottom: 24,
//                   maxWidth: 480,
//                 }}
//               >
//                 Compile the new retro-productivity design tokens, establish the
//                 conflict resolution protocol, and prepare the shared components
//                 JSON for the engineering team.
//               </p>

//               <div
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'space-between',
//                 }}
//               >
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
//                   <div
//                     style={{
//                       width: 32,
//                       height: 32,
//                       borderRadius: '50%',
//                       ...chunkyBorder,
//                       backgroundColor: 'var(--pace-blue)',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                     }}
//                   >
//                     <span
//                       style={{
//                         fontFamily: 'var(--pace-font-mono)',
//                         fontSize: 12,
//                         fontWeight: 700,
//                         color: 'var(--pace-ink-deep)',
//                       }}
//                     >
//                       Design
//                     </span>
//                   </div>
//                   <span
//                     style={{
//                       fontFamily: 'var(--pace-font-mono)',
//                       fontSize: 14,
//                       color: '#747878',
//                     }}
//                   >
//                     Due 5:00 PM
//                   </span>
//                 </div>

//                 <button
//                   style={{
//                     padding: '8px 24px',
//                     backgroundColor: 'var(--pace-ink-deep)',
//                     color: 'var(--pace-paper-base)',
//                     fontFamily: 'var(--pace-font-mono)',
//                     fontSize: 14,
//                     fontWeight: 700,
//                     ...chipBtn,
//                     borderRadius: 'var(--pace-radius-sm, 0.25rem)',
//                   }}
//                 >
//                   Complete
//                 </button>
//               </div>
//             </section>

//             {/* --- Today's Focus (Notebook List) --- */}
//             <section
//               style={{
//                 backgroundColor: 'var(--pace-paper-base)',
//                 borderRadius: 'var(--pace-radius-lg, 0.75rem)',
//                 ...chunkyBorder,
//                 padding: 24,
//                 height: 400,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 position: 'relative',
//               }}
//             >
//               {/* squiggle doodle */}
//               <svg
//                 style={{
//                   position: 'absolute',
//                   bottom: 16,
//                   right: 24,
//                   width: 48,
//                   height: 48,
//                   color: 'var(--pace-yellow)',
//                   opacity: 0.5,
//                 }}
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={3}
//                 viewBox="0 0 100 100"
//               >
//                 <path d="M10,50 Q30,20 50,50 T90,50" />
//                 <circle cx="90" cy="50" fill="currentColor" r="5" />
//               </svg>

//               <h3
//                 style={{
//                   fontFamily: 'var(--pace-font-display)',
//                   fontSize: 'var(--pace-font-head3-size, 24px)',
//                   fontWeight: 600,
//                   lineHeight: 1.3,
//                   marginBottom: 16,
//                   color: 'var(--pace-ink-deep)',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: 8,
//                 }}
//               >
//                 <MaterialIcon name="checklist" /> Today's Focus
//               </h3>

//               {/* task list with notebook lines */}
//               <div
//                 style={{
//                   flex: 1,
//                   overflowY: 'auto',
//                   backgroundImage:
//                     'repeating-linear-gradient(transparent, transparent 31px, var(--pace-primary-fixed-dim, #c8c6c5) 31px, var(--pace-primary-fixed-dim, #c8c6c5) 32px)',
//                   paddingTop: 4,
//                   paddingRight: 8,
//                 }}
//               >
//                 {tasks.map((task) => {
//                   const checked = taskState[task.id];
//                   return (
//                     <div
//                       key={task.id}
//                       style={{
//                         display: 'flex',
//                         alignItems: 'flex-start',
//                         gap: 16,
//                         padding: '12px 0',
//                       }}
//                     >
//                       <input
//                         type="checkbox"
//                         checked={checked}
//                         onChange={() => toggleTask(task.id)}
//                         style={{
//                           marginTop: 4,
//                           width: 20,
//                           height: 20,
//                           borderRadius: 'var(--pace-radius-sm, 0.25rem)',
//                           ...chunkyBorder,
//                           backgroundColor: 'var(--pace-paper-base)',
//                           cursor: 'pointer',
//                           accentColor: 'var(--pace-sec-container)',
//                           flexShrink: 0,
//                         }}
//                       />
//                       <div style={{ flex: 1 }}>
//                         <p
//                           style={{
//                             fontFamily: 'var(--pace-font-body)',
//                             fontSize: 'var(--pace-font-body-size, 16px)',
//                             fontWeight: 500,
//                             color: checked
//                               ? '#747878'
//                               : 'var(--pace-ink-deep)',
//                             textDecoration: checked ? 'line-through' : 'none',
//                             cursor: 'pointer',
//                             margin: 0,
//                           }}
//                         >
//                           {task.title}
//                         </p>
//                         <div
//                           style={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             gap: 8,
//                             marginTop: 4,
//                             opacity: checked ? 0.6 : 1,
//                           }}
//                         >
//                           <Badge bg={task.tagBg}>{task.tag}</Badge>
//                           {task.priority && (
//                             <span
//                               style={{
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 gap: 2,
//                                 color: 'var(--pace-red)',
//                                 fontFamily: 'var(--pace-font-mono)',
//                                 fontSize: 12,
//                                 fontWeight: 500,
//                               }}
//                             >
//                               <MaterialIcon
//                                 name="local_fire_department"
//                                 size={16}
//                                 fill
//                               />{' '}
//                               {task.priority}
//                             </span>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* add task input */}
//               <div
//                 style={{
//                   marginTop: 16,
//                   paddingTop: 16,
//                   borderTop: '2px solid var(--pace-ink-deep)',
//                 }}
//               >
//                 <input
//                   type="text"
//                   value={newTask}
//                   onChange={(e) => setNewTask(e.target.value)}
//                   placeholder="Add a new task..."
//                   style={{
//                     width: '100%',
//                     backgroundColor: 'var(--pace-paper-dark)',
//                     border: '2px solid var(--pace-ink-deep)',
//                     borderRadius: 'var(--pace-radius-sm, 0.25rem)',
//                     padding: '8px 12px',
//                     fontFamily: 'var(--pace-font-mono)',
//                     fontSize: 14,
//                     outline: 'none',
//                     color: 'var(--pace-ink-deep)',
//                   }}
//                 />
//               </div>
//             </section>
//           </div>

//           {/* ---- RIGHT COLUMN (4 cols) ---- */}
//           <div
//             style={{
//               gridColumn: 'span 4',
//               display: 'flex',
//               flexDirection: 'column',
//               gap: 'var(--pace-font-head1-size, 24px)',
//             }}
//           >
//             {/* --- Daily Schedule --- */}
//             <section
//               style={{
//                 backgroundColor: 'var(--pace-low, #f7f3f2)',
//                 borderRadius: 'var(--pace-radius-lg, 0.75rem)',
//                 ...chunkyBorder,
//                 padding: 20,
//                 position: 'relative',
//               }}
//             >
//               <h3
//                 style={{
//                   fontFamily: 'var(--pace-font-display)',
//                   fontSize: 'var(--pace-font-head3-size, 24px)',
//                   fontWeight: 600,
//                   lineHeight: 1.3,
//                   marginBottom: 16,
//                   color: 'var(--pace-ink-deep)',
//                 }}
//               >
//                 Schedule
//               </h3>

//               <div
//                 style={{
//                   position: 'relative',
//                   paddingLeft: 16,
//                   borderLeft: '2px dashed var(--pace-highest, #c4c7c7)',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   gap: 24,
//                 }}
//               >
//                 {/* NOW indicator */}
//                 <div
//                   style={{
//                     position: 'absolute',
//                     left: -24,
//                     top: '40%',
//                     display: 'flex',
//                     alignItems: 'center',
//                     color: 'var(--pace-red)',
//                   }}
//                 >
//                   <span
//                     style={{
//                       fontFamily: 'var(--pace-font-mono)',
//                       fontSize: 12,
//                       fontWeight: 700,
//                       marginRight: 4,
//                     }}
//                   >
//                     NOW
//                   </span>
//                   <svg
//                     width={24}
//                     height={24}
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M5 12h14M12 5l7 7-7 7" />
//                   </svg>
//                 </div>

//                 {schedule.map((item, i) => (
//                   <div
//                     key={i}
//                     style={{
//                       position: 'relative',
//                       opacity: item.active ? 1 : 0.6,
//                     }}
//                   >
//                     {/* dot on timeline */}
//                     <div
//                       style={{
//                         position: 'absolute',
//                         width: 12,
//                         height: 12,
//                         backgroundColor: item.active
//                           ? 'var(--pace-yellow)'
//                           : 'var(--pace-highest, #e5e2e1)',
//                         borderRadius: item.active ? '50%' : 'var(--pace-radius-sm, 0.25rem)',
//                         ...chunkyBorder,
//                         left: -23,
//                         top: 4,
//                       }}
//                     />
//                     <p
//                       style={{
//                         fontFamily: 'var(--pace-font-mono)',
//                         fontSize: 12,
//                         color: '#747878',
//                         marginBottom: 4,
//                         margin: 0,
//                         paddingBottom: 4,
//                       }}
//                     >
//                       {item.time}
//                     </p>
//                     <div
//                       style={{
//                         backgroundColor: item.active
//                           ? 'var(--pace-paper-base)'
//                           : 'var(--pace-paper-dark)',
//                         padding: 12,
//                         borderRadius: 'var(--pace-radius-sm, 0.25rem)',
//                         border: item.active
//                           ? '2px solid var(--pace-ink-deep)'
//                           : '2px solid var(--pace-highest, #c4c7c7)',
//                       }}
//                     >
//                       <p
//                         style={{
//                           fontFamily: 'var(--pace-font-body)',
//                           fontSize: 'var(--pace-font-body-size, 16px)',
//                           fontWeight: item.active ? 700 : 500,
//                           fontStyle: item.italic ? 'italic' : 'normal',
//                           color: item.italic
//                             ? '#747878'
//                             : 'var(--pace-ink-deep)',
//                           margin: 0,
//                         }}
//                       >
//                         {item.label}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>

//             {/* --- Habit Tracker --- */}
//             <section
//               style={{
//                 backgroundColor: 'var(--pace-paper-dark)',
//                 borderRadius: 'var(--pace-radius-lg, 0.75rem)',
//                 ...chunkyBorder,
//                 padding: 20,
//               }}
//             >
//               <h3
//                 style={{
//                   fontFamily: 'var(--pace-font-display)',
//                   fontSize: 'var(--pace-font-head3-size, 24px)',
//                   fontWeight: 600,
//                   lineHeight: 1.3,
//                   marginBottom: 16,
//                   color: 'var(--pace-ink-deep)',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: 8,
//                 }}
//               >
//                 <MaterialIcon name="auto_awesome" /> Habits
//               </h3>

//               <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
//                 {habits.map((h, i) => (
//                   <div
//                     key={i}
//                     style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'space-between',
//                     }}
//                   >
//                     <span
//                       style={{
//                         fontFamily: 'var(--pace-font-mono)',
//                         fontSize: 14,
//                         color: 'var(--pace-ink-deep)',
//                       }}
//                     >
//                       {h.name}
//                     </span>
//                     <div style={{ display: 'flex', gap: 4 }}>
//                       {h.circles ? (
//                         h.circles.map((filled, ci) => (
//                           <div
//                             key={ci}
//                             style={{
//                               width: 24,
//                               height: 24,
//                               borderRadius: '50%',
//                               ...chunkyBorder,
//                               backgroundColor: filled
//                                 ? 'var(--pace-blue)'
//                                 : 'var(--pace-paper-base)',
//                             }}
//                           />
//                         ))
//                       ) : (
//                         <div
//                           style={{
//                             width: 24,
//                             height: 24,
//                             borderRadius: 'var(--pace-radius-sm, 0.25rem)',
//                             ...chunkyBorder,
//                             backgroundColor: h.done
//                               ? 'var(--pace-green)'
//                               : 'var(--pace-paper-base)',
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             cursor: 'pointer',
//                           }}
//                         >
//                           {h.done && (
//                             <MaterialIcon
//                               name="check"
//                               size={16}
//                               style={{
//                                 color: 'var(--pace-ink-deep)',
//                                 fontWeight: 700,
//                               }}
//                             />
//                           )}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>

//             {/* --- Focus Time Stats --- */}
//             <section
//               style={{
//                 backgroundColor: 'var(--pace-sec-container)',
//                 borderRadius: 'var(--pace-radius-lg, 0.75rem)',
//                 ...chunkyBorder,
//                 ...hardShadow,
//                 padding: 20,
//                 color: 'var(--pace-ink-deep)',
//               }}
//             >
//               <h3
//                 style={{
//                   fontFamily: 'var(--pace-font-display)',
//                   fontSize: 'var(--pace-font-head3-size, 24px)',
//                   fontWeight: 600,
//                   lineHeight: 1.3,
//                   marginBottom: 8,
//                 }}
//               >
//                 Focus Time
//               </h3>

//               <div
//                 style={{
//                   display: 'flex',
//                   alignItems: 'flex-end',
//                   gap: 8,
//                   marginBottom: 16,
//                 }}
//               >
//                 <span
//                   style={{
//                     fontFamily: 'var(--pace-font-display)',
//                     fontSize: 48,
//                     lineHeight: 1,
//                     fontWeight: 900,
//                   }}
//                 >
//                   4.5
//                 </span>
//                 <span
//                   style={{
//                     fontFamily: 'var(--pace-font-mono)',
//                     fontSize: 14,
//                     fontWeight: 700,
//                     marginBottom: 8,
//                   }}
//                 >
//                   hrs
//                 </span>
//               </div>

//               {/* progress */}
//               <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
//                 <div
//                   style={{
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     fontFamily: 'var(--pace-font-mono)',
//                     fontSize: 12,
//                     fontWeight: 700,
//                   }}
//                 >
//                   <span>Weekly Goal</span>
//                   <span>65%</span>
//                 </div>
//                 <div
//                   style={{
//                     height: 12,
//                     width: '100%',
//                     backgroundColor: 'var(--pace-paper-base)',
//                     borderRadius: 'var(--pace-radius-full, 9999px)',
//                     overflow: 'hidden',
//                     ...chunkyBorder,
//                   }}
//                 >
//                   <div
//                     style={{
//                       height: '100%',
//                       backgroundColor: 'var(--pace-ink-deep)',
//                       width: '65%',
//                       borderRadius: 'var(--pace-radius-full, 9999px)',
//                     }}
//                   />
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from 'react'
// import Skeleton_loader from '../../components/Skeleton_loader';

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* <h1>Shuvam</h1>
      <p className="caption">shuvam</p>
      <div className="buttons">
        <button className="btn btn-primary">Shuvam</button>
        <button className="btn btn-secondary">Pareeneeti</button>
        <button className="btn btn-ghost">Shuvam</button>
        <button className="btn btn-danger">Pareeneeti</button>
        <button className="btn btn-pill">Shuvam</button>
        <button className="btn btn-primary" disabled>
          Pareeneeti
        </button>
        <button className="btn btn-icon btn-primary">+</button>
        <button className="btn btn-icon btn-secondary">*</button>
        <button className="btn btn-icon btn-ghost">-</button>
        <button className="btn btn-icon btn-danger">X</button>
      </div>
      <div className="inputs">
        <div className="flex items-center gap-2">
                  <div
                    className="switch"
                    onClick={(e) => e.currentTarget.classList.toggle('active')}
                  ></div>
                  <label className="body">Dark mode</label>
                </div>
      </div> */}

        {/* cards */}

      {/* <div className="card task">
        <h3>Default Card</h3>
        <p className="body-sm text-muted">Standard card with chunky border and paper-dark background.</p>
      </div>
      <div className="card card-elevated task">
        <h3 className="h3 mb-2">Default Card</h3>
        <p className="body-sm text-muted">Standard card with chunky border and paper-dark background.</p>
      </div>
      <div className="card card-accent task">
        <h3 className="h3 mb-2">Default Card</h3>
        <p className="body-sm">Standard card with chunky border and paper-dark background.</p>
      </div>
      <div className="card card-dashed task">
        <h3 className="h3 mb-2">Default Card</h3>
        <p className="body-sm">Standard card with chunky border and paper-dark background.</p>
      </div> */}

      {/* <span className="badge badge-muted-yellow animate-sticker" style={{width: 'fit-content'}}>TODAY</span>
      <span className="badge badge-muted-red animate-sticker" style={{width: 'fit-content'}}>HIGH</span>
      <span className="badge badge-muted-green animate-sticker" style={{width: 'fit-content'}}>MEDIUM</span>
      <span className="badge badge-dusty-blue animate-sticker" style={{width: 'fit-content'}}>LOW</span>
      <span className="badge badge-secondary animate-sticker" style={{width: 'fit-content'}}>DESIGN</span>
      <span className="badge badge-ghost animate-sticker" style={{ width: 'fit-content' }}>DRAFT</span>

      <Skeleton_loader />

      <div className="toast animate-slide-up" style={{position: 'static', width: 'fit-content'}}>
                  <span className="material-symbols-outlined" style={{fontSize: '18px'}}>0</span>
                  Task completed
                </div> */}
    </div>
  )
}

export default Dashboard
