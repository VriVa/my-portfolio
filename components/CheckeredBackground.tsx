"use client"

export default function CheckeredBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Notebook paper background */}
      <div
        className="w-full h-full"
        style={{
          backgroundColor: "#fefefe",
          backgroundImage: `
            /* Horizontal ruled lines */
            repeating-linear-gradient(
              transparent,
              transparent 24px,
              #fce7f3 24px,
              #fce7f3 25px
            ),
            /* Vertical margin line */
            linear-gradient(
              to right,
              transparent 79px,
              #f9a8d4 80px,
              #f9a8d4 80.5px,
              transparent 81px
            )
          `,
        }}
      />

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/20 via-transparent to-rose-50/20" />

      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, #fce7f3 1px, transparent 0)
          `,
          backgroundSize: "20px 20px",
        }}
      />
    </div>
  )
}
