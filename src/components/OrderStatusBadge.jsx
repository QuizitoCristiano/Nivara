export default function OrderStatusBadge({ status }) {
  const getStatusConfig = (status) => {
    switch (status.toLowerCase()) {
      case "pendente":
        return {
          bgColor: "bg-yellow-100",
          textColor: "text-yellow-800",
          borderColor: "border-yellow-200"
        };
      case "em preparo":
        return {
          bgColor: "bg-blue-100",
          textColor: "text-blue-800",
          borderColor: "border-blue-200"
        };
      case "em entrega":
        return {
          bgColor: "bg-purple-100",
          textColor: "text-purple-800",
          borderColor: "border-purple-200"
        };
      case "entregue":
        return {
          bgColor: "bg-green-100",
          textColor: "text-green-800",
          borderColor: "border-green-200"
        };
      case "cancelado":
        return {
          bgColor: "bg-red-100",
          textColor: "text-red-800",
          borderColor: "border-red-200"
        };
      default:
        return {
          bgColor: "bg-gray-100",
          textColor: "text-gray-800",
          borderColor: "border-gray-200"
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${config.bgColor} ${config.textColor} ${config.borderColor}`}>
      {status}
    </span>
  );
} 